import uuid from "react-native-uuid";
import { tables } from './tables';

export const createRecipe = (db, recipe) => new Promise((resolve, reject) => {
    const recipeQuery = `INSERT INTO ${tables.RECIPES} (id, name, description) values(?, ?, ?)`;
    const ingredientsQuery = `INSERT INTO ${tables.INGREDIENTS} (id, recipeId, ingredient, quantity, uom) values(?, ?, ?, ?, ?)`;
    const stepsQuery = `INSERT INTO ${tables.STEPS} (id, recipeId, step, stepOrder) values(?, ?, ?, ?)`;
    const imagesQuery = `INSERT INTO ${tables.RECIPEIMAGES} (id, recipeId, base64) values(?, ?, ?)`;
    db.transaction(
        (tx) => {
            const newRecipe = {
                id: uuid.v4(),
                name: recipe.name,
                description: recipe.description,
            };
            tx.executeSql(
                recipeQuery,
                [newRecipe.id, newRecipe.name, newRecipe.description],
                () => { },
                (error) => reject(error)
            )
            recipe.ingredients.forEach(ingredient => {
                tx.executeSql(
                    ingredientsQuery,
                    [ingredient.id, newRecipe.id, ingredient.ingredient, ingredient.quantity, ingredient.uom],
                    () => { },
                    (error) => reject(error)
                )
            });
            recipe.steps.forEach(step => {
                tx.executeSql(
                    stepsQuery,
                    [step.id, newRecipe.id, step.step, step.stepOrder],
                    () => { },
                    (error) => reject(error)
                )
            });
            recipe.images.forEach(image => {
                tx.executeSql(
                    imagesQuery,
                    [image.id, newRecipe.id, image.base64],
                    () => resolve(),
                    (error) => reject(error)
                );
            })
            resolve(newRecipe);
        },
        (error) => reject(error)
    );
});

export const getRecipes = async (db) => new Promise((resolve, reject) => {
    db.transaction(
        tx => {
            tx.executeSql(
                `
                    SELECT id, name, description FROM ${tables.RECIPES}
                `, [], 
                (tx, results) => {
                    resolve(results.rows._array);
                },
                error => reject(error)
            );
        },
        error => {
            reject(error);
        }
    );
});

export const getRecipe = async (db, _id) => new Promise((resolve, reject) => {
    db.transaction(
        tx => {
            tx.executeSql(
                `
                    SELECT id, name, description FROM ${tables.RECIPES} WHERE id = ?
                `, [_id], 
                (tx, recipeResults) => {
                    const { id } = recipeResults.rows._array?.[0]; 
                    tx.executeSql(
                        `
                            SELECT id, recipeId, ingredient, quantity, uom FROM ${tables.INGREDIENTS} WHERE recipeId = ?
                        `, [id], 
                        (tx, ingredientResults) => {
                            tx.executeSql(
                                `
                                    SELECT id, recipeId, step, stepOrder FROM ${tables.STEPS} WHERE recipeId = ?
                                `, [id],
                                (tx, stepResults) => {
                                    tx.executeSql(
                                        `
                                            SELECT id, base64, recipeId FROM ${tables.RECIPEIMAGES} WHERE recipeId = ?
                                        `,
                                        [id],
                                        (tx, imageResults) => {
                                            const ingredients =
                                                ingredientResults.rows._array;
                                            const steps =
                                                stepResults.rows._array;
                                            const images =
                                                imageResults.rows._array;
                                            return resolve({
                                                ...recipeResults.rows
                                                    ._array?.[0],
                                                ingredients,
                                                images,
                                                steps: steps
                                                    .map((s) => ({
                                                        ...s,
                                                        stepOrder: s.stepOrder,
                                                    }))
                                                    .sort(
                                                        (a, b) =>
                                                            a.stepOrder -
                                                            b.stepOrder
                                                    ),
                                            });
                                        }
                                    );
                                },
                                error => {
                                    console.error(error);
                                    return reject(error);
                                }
                            );
                        },
                        error => {
                            console.error(error);
                            return reject(error);
                        }
                    );
                },
                error => reject(error)
            );
        },
        error => reject(error)
    );
});

export const deleteRecipe = (db, _id) => new Promise((resolve, reject) => {
    db.transaction(
        tx => {
            //We don't really care much for the results. Assume they deleted
            tx.executeSql(
                `DELETE FROM ${tables.RECIPES} WHERE id = ?`,
                [_id]
            );
            tx.executeSql(
                `DELETE FROM ${tables.INGREDIENTS} WHERE recipeId = ?`,
                [_id]   
            );
            tx.executeSql(
                `DELETE FROM ${tables.STEPS} WHERE recipeId = ?`,
                [_id]
            );
            return resolve();
        },
        error => reject(error)
    );
});

export const editRecipe = (db, recipe) => new Promise((resolve, reject) => {
    const recipeQuery = `
        UPDATE ${tables.RECIPES}
        SET name = ?, description = ?
        WHERE id = ?     
    `;
    const ingredientsQuery = `
        UPDATE ${tables.INGREDIENTS}
        SET ingredient = ?, quantity = ?, uom = ?
        WHERE recipeId = ? AND id = ? 
    `;
    const stepsQuery = `
        UPDATE ${tables.STEPS}
        SET step = ?, stepOrder = ?
        WHERE recipeId = ? AND id = ? 
    `;
    db.transaction(
        (tx) => {
            const recipeToUpdate = {
                name: recipe.name,
                description: recipe.description,
            };
            tx.executeSql(
                recipeQuery,
                [recipeToUpdate.name, recipeToUpdate.description, recipe.id],
                () => {},
                (error) => reject(error)
            );
            recipe.ingredients.forEach((ingredient) => {
                tx.executeSql(
                    ingredientsQuery,
                    [
                        ingredient.ingredient,
                        ingredient.quantity,
                        ingredient.uom,
                        recipe.id,
                        ingredient.id,
                    ],
                    () => {},
                    (error) => reject(error)
                );
            });
            recipe.steps.forEach((step) => {
                tx.executeSql(
                    stepsQuery,
                    [step.step, step.stepOrder, step.id, recipe.id],
                    () => {},
                    (error) => reject(error)
                );
            });
            resolve(recipe);
        },
        (error) => reject(error)
    );
});

//Image amendments should be handled separately from the recipe.
//Creation can all be done at once but editing and deleting will be 
//difficult to track changes. So they will be handled as and when they
//are added and deleted. 
export const insertRecipeImage = (db, {image, recipeId}) => new Promise((resolve, reject) => {
    const query = `
        INSERT INTO ${tables.RECIPEIMAGES} (id, recipeId, base64) values(?, ?, ?)
    `;
    db.transaction(
        tx => {
            tx.executeSql(
                query,
                [image.id, recipeId, image.base64],
                () => resolve(),
                (error) => reject(error)
            );
        },
        error => reject(error)
    );
});