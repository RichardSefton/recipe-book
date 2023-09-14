// https://docs.expo.dev/versions/latest/sdk/sqlite/
import * as SQLite from 'expo-sqlite';
import { tables } from './tables';
import uuid from 'react-native-uuid';
import { blackForestTrifle, fishFingerSandwich } from './testData';

export const openDb = () => {
    try {
        const conn = SQLite.openDatabase('recipebook.db', '1.5');
        return conn;   
    } catch(error) {
        console.error(error);
    }
}

export const createTables = (conn) => new Promise((resolve, reject) => {
    conn.transaction(
        (tx) => {
            tx.executeSql(
                `
                    CREATE TABLE IF NOT EXISTS ${tables.RECIPES} (
                        id VARCHAR(36) PRIMARY KEY,
                        name VARCHAR(128),
                        description VARCHAR(512)
                    )
                `,
                [],
                () => console.log("CREATED RECIPES TABLE"),
                (error) => console.error(error)
            );
            tx.executeSql(
                `
                CREATE TABLE IF NOT EXISTS ${tables.INGREDIENTS} (
                    id VARCHAR(36) PRIMARY KEY,
                    recipeId VARCHAR(36),
                    ingredient VARCHAR(256),
                    quantity INTEGER,
                    uom VARCHAR(64)
                )
            `,
                []
            );
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS ${tables.STEPS} (
                    id VARCHAR(36) PRIMARY KEY,
                    recipeId VARCHAR(36),
                    step VARCHAR(2048),
                    stepOrder INTEGER
                )
            `);
            //VARCHAR(MAX) is not supported in SQLite. But a value makes no difference according to
            //https://www.allindiaexams.in/interview/interview-questions-and-answers/databases/sqlite/discussion/10023
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS ${tables.RECIPEIMAGES} (
                    id VARCHAR(36) PRIMARY KEY,
                    recipeId VARCHAR(36),
                    base64 VARCHAR(10000)
                )
            `, [],()=>{},(error)=>console.error(error));
            //We want to prime the database if we are in Development mode
            if (__DEV__)
                primeDb(conn)
                    .then(() => resolve())
                    .catch((error) => reject(error));
            else resolve();
        },
        (error) => {
            conn.closeAsync();
            reject(error);
        }
    );
});
const primeDb = (conn) => new Promise((resolve, reject) => {
    conn.transaction(
        tx => {
            //clear down the database for consistent data
            tx.executeSql(`DELETE FROM ${tables.STEPS}`, []);
            tx.executeSql(`DELETE FROM ${tables.INGREDIENTS}`, []);
            tx.executeSql(`DELETE FROM ${tables.RECIPES}`, []);
            console.log("CLEARED DATA");
            console.log("PRIMING DATA");
            const newBlackForestTrifle = {
                ...blackForestTrifle,
                id: uuid.v4()
            };
            tx.executeSql(
                `INSERT INTO ${tables.RECIPES} (id, name, description) values(?, ?, ?)`,
                [newBlackForestTrifle.id, newBlackForestTrifle.name, newBlackForestTrifle.description]
            );
            newBlackForestTrifle.ingredients.forEach(ingredient => {
                tx.executeSql(
                    `INSERT INTO ${tables.INGREDIENTS} (id, recipeId, ingredient, quantity, uom) values(?, ?, ?, ?, ?)`,
                    [uuid.v4(), newBlackForestTrifle.id, ingredient.ingredient, ingredient.quantity, ingredient.uom]
                );
            });
            newBlackForestTrifle.steps.forEach(step => {
                tx.executeSql(
                    `INSERT INTO ${tables.STEPS} (id, recipeId, step, stepOrder) values(?, ?, ?, ?)`,
                    [uuid.v4(), newBlackForestTrifle.id, step.step, step.stepOrder]
                );
            });
            const newFishFingerSandwich = {
                ...fishFingerSandwich,
                id: uuid.v4()
            };
            tx.executeSql(
                `INSERT INTO ${tables.RECIPES} (id, name, description) values(?, ?, ?)`,
                [newFishFingerSandwich.id, newFishFingerSandwich.name, newFishFingerSandwich.description]
            );
            newFishFingerSandwich.ingredients.forEach(ingredient => {
                tx.executeSql(
                    `INSERT INTO ${tables.INGREDIENTS} (id, recipeId, ingredient, quantity, uom) values(?, ?, ?, ?, ?)`,
                    [uuid.v4(), newFishFingerSandwich.id, ingredient.ingredient, ingredient.quantity, ingredient.uom]
                );
            });
            newFishFingerSandwich.steps.forEach(step => {
                tx.executeSql(
                    `INSERT INTO ${tables.STEPS} (id, recipeId, step, stepOrder) values(?, ?, ?, ?)`,
                    [uuid.v4(), newFishFingerSandwich.id, step.step, step.stepOrder]
                );
            });
            resolve()
        },
        error => {
            console.error(error);
            reject(error)
        }
    );
});