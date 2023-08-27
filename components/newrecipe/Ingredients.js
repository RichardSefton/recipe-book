import { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { ScrollView, View, Text, Pressable } from "react-native";
import {
    ingredientsFormStyles as styles,
    deleteIngredientStyles as deleteStyles,
} from "./styles";
import { EditIcon, DeleteIcon } from "../buttons";
import { selectIngredientForEdit, deleteIngredient } from "../../redux/recipeSlice/slice";

const Ingredients = ({ ingredients }) => {
    const dispatch = useDispatch();
    const [ingredientsToDelete, setIngredientsToDelete] = useState([]);

    useEffect(() => {
        //verify that the steps to delete actually exist in the steps array
        const remove = [];
        ingredientsToDelete.forEach((i) => {
            if (!ingredients.find((ingredient) => ingredient.id === i)) remove.push(i);
        });
        setIngredientsToDelete([...ingredientsToDelete.filter((i) => !remove.includes(i))]);
    }, [ingredients]);

    const handleEditIngredient = (ingredient) => {
        dispatch(selectIngredientForEdit(ingredient));
    };
    const handleConfirmDeleteIngredient = (ingredient) => {
        setIngredientsToDelete([...ingredientsToDelete, ingredient.id]);
    };
    const handleCancelDelete = (ingredient) => {
        setIngredientsToDelete([...ingredientsToDelete.filter((id) => id !== ingredient.id)]);
    };
    const handleDeleteIngredient = (ingredient) => {
        dispatch(deleteIngredient(ingredient));
    };

    return (
        <ScrollView
            scrollEnabled={true}
            style={styles.ingredientsListContainer}
        >
            {ingredients.map((i) => (
                <Fragment key={i.id}>
                    {!ingredientsToDelete.includes(i.id) ? (
                        <View key={i.id} style={styles.ingredientLineContainer}>
                            <Text
                                style={[
                                    styles.ingredientLineText,
                                    styles.qtyLineText,
                                ]}
                            >
                                {i.quantity}
                            </Text>
                            <Text
                                style={[
                                    styles.ingredientLineText,
                                    styles.uomLineText,
                                ]}
                            >
                                {i.uom}
                            </Text>
                            <Text
                                style={[
                                    styles.ingredientLineText,
                                    styles.ingredientLineText,
                                ]}
                            >
                                {i.ingredient}
                            </Text>
                            <View style={styles.editIconContainer}>
                                <EditIcon
                                    handleClick={() => handleEditIngredient(i)}
                                />
                            </View>
                            <View style={styles.deleteIconContainer}>
                                <DeleteIcon
                                    handleClick={() =>
                                        handleConfirmDeleteIngredient(i)
                                    }
                                />
                            </View>
                        </View>
                    ) : (
                        <View style={[deleteStyles.deleteIngredientContainer]}>
                            <View
                                style={
                                    deleteStyles.deleteIngredientButtonsContainer
                                }
                            >
                                <Pressable
                                    style={[
                                        deleteStyles.button,
                                        deleteStyles.deleteButton,
                                    ]}
                                    onPress={() => handleDeleteIngredient(i)}
                                >
                                    <Text style={deleteStyles.buttonText}>
                                        Delete
                                    </Text>
                                </Pressable>
                                <Pressable
                                    style={deleteStyles.button}
                                    onPress={() => handleCancelDelete(i)}
                                >
                                    <Text style={deleteStyles.buttonText}>
                                        Cancel
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </Fragment>
            ))}
        </ScrollView>
    );
}

export default connect(({ recipeSlice }) => ({
    ingredients: recipeSlice.recipe.ingredients,
}))(Ingredients);