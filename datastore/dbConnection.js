// https://docs.expo.dev/versions/latest/sdk/sqlite/
import * as SQLite from 'expo-sqlite';
import { tables } from './tables';
import { createContext } from 'react';
import uuid from 'react-native-uuid';

export const DatabaseContext = createContext({
    conn: {},
    setConn: () => {}
});

export const openDb = () => {
    try {
        const conn = SQLite.openDatabase('recipebook.db', '1.3');
        return conn;   
    } catch(error) {
        console.log(error);
    }
}

export const createTables = (conn) => new Promise((resolve, reject) => {
    conn.transaction(
        (tx) => {
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS ${tables.RECIPES} (
                    id VARCHAR(36) PRIMARY KEY,
                    name VARCHAR(128),
                    description VARCHAR(512)
                )
            `, []);
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS ${tables.INGREDIENTS} (
                    id VARCHAR(36) PRIMARY KEY,
                    recipeId VARCHAR(36),
                    ingredient VARCHAR(256),
                    quantity INTEGER,
                    uom VARCHAR(64)
                )
            `, []);
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS ${tables.STEPS} (
                    id VARCHAR(36) PRIMARY KEY,
                    recipeId VARCHAR(36),
                    step VARCHAR(2048),
                    stepOrder INTEGER
                )
            `)
            //We want to prime the database if we are in Development mode
            if (__DEV__)
                primeDb(conn)
                    .then(() => resolve())
                    .catch(error => reject(error));
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
            tx.executeSql(
                `INSERT INTO ${tables.RECIPES} (id, name, description) values(?, ?, ?)`,
                [uuid.v4(), "test", "test description"]
            );
            resolve()
        },
        error => reject(error)
    );
});