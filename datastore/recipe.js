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
            tx.executeSql('SELECT * FROM recipes', [], 
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

// export const saveTodoItems = async (
//     db,
//     todoItems
// ) => {
//     const insertQuery =
//         `INSERT OR REPLACE INTO ${tableName}(name, value) values` +
//         todoItems.map((i) => `(${i.id}, '${i.value}')`).join(",");

//     return db.executeSql(insertQuery);
// };

// export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
//     const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
//     await db.executeSql(deleteQuery);
// };

// export const deleteTable = async (db: SQLiteDatabase) => {
//     const query = `drop table ${tableName}`;

//     await db.executeSql(query);
// };
