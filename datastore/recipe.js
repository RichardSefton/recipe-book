import { openDb } from './dbConnection';

export const createRecipe = async (db, recipe) => {
    try {
        const query = `INSERT INTO ${tableName}(id, name, description) values(?, ?, ?)`;
        await db.executeSql(query, [uuidv4(), recipe.name, recipe.description]);
    } catch (error) {
        console.error(error);
        throw Error("Failed to create todoItem !!!");
    }
};

export const getRecipes = async () => new Promise((resolve, reject) => {
    const conn = openDb()
    conn.transaction(
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
