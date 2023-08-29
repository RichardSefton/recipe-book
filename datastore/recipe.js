import uuid from "react-native-uuid";
import { tables } from './tables';

export const createRecipe = (db, recipe) => new Promise((resolve, reject) => {
    const recipeQuery = `INSERT INTO ${tables.RECIPES} (id, name, description) values(?, ?, ?)`;
    const ingredientsQuery = `INSERT INTO ${tables.INGREDIENTS} (id, recipeId, ingredient, quantity, uom) values(?, ?, ?, ?, ?)`;
    const stepsQuery = `INSERT INTO ${tables.STEPS} (id, recipeId, step, stepOrder) values(?, ?, ?, ?)`;
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
                                    const ingredients = ingredientResults.rows._array;
                                    const steps = stepResults.rows._array;
                                    return resolve({
                                        ...recipeResults.rows._array?.[0],
                                        ingredients,
                                        steps: steps
                                                .map(s => ({ ...s, stepNo: s.stepOrder }))
                                                .sort((a, b) => a.stepOrder - b.stepOrder) 
                                    });
                                },
                                error => {
                                    console.log(error);
                                    return reject(error);
                                }
                            );
                        },
                        error => {
                            console.log(error);
                            return reject(error);
                        }
                    ) 
                },
                error => reject(error)
            );
        },
        error => {
            reject(error);
        }
    );
});
