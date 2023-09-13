import uuid from "react-native-uuid";
import { tables } from "./tables";

export const insertRecipeImage = (db, image, recipeId) => new Promise((resolve, reject) => {
    const query = `INSERT INTO ${tables.RECIPEIMAGES} (id, recipeId, imageUri) values(?, ?, ?)`;
    db.transaction(
        tx => {
            tx.executeSql(
                query,
                [image.id, recipeId, image.uri],
                () => resolve(id),
                error => reject(error)
            );
        },
        error => reject(error)
    );
});
