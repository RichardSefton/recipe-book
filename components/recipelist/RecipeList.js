import { useEffect, useState } from "react";
import { ScrollView, View, Pressable } from "react-native";
import { recipeListStyle } from "./style";
import RecipeCard from "./RecipeCard";
import { connect, useDispatch } from 'react-redux';
import { loadRecipes, deleteRecipe, loadRecipe } from "../../redux/recipeSlice/slice";
import LongPressActions from "./LongPressActions";

const RecipeList = ({ navigation, recipes={} }) => {
    const dispatch = useDispatch();
    const [longPressedList, setLongPressedList] = useState([]);

    useEffect(() => {
        dispatch(loadRecipes());
    }, []);

    const handlePress = (recipe) => {
        navigation.navigate("Recipe", { recipe });
    };

    const handleLongPress = (recipe) => {
        setLongPressedList(lpl => [...lpl, recipe]);
    };

    const handleCancel = (recipe) => {
        setLongPressedList(lpl => [...lpl.filter(el => el !== recipe)]);
    };

    const handleDelete = (recipe) => {
        dispatch(deleteRecipe(recipe));
    }

    const handleEdit = (recipe) => {
        dispatch(loadRecipe(recipe));
        setLongPressedList((lpl) => [...lpl.filter((el) => el !== recipe)]);
        navigation.navigate('EditRecipe', { recipeId: recipe });
    }

    return (
        <View style={recipeListStyle.container}>
            <ScrollView scrollEnabled={true}>
                {Object.keys(recipes.entities).map((r) => (
                    <Pressable 
                        key={r}
                        style={recipeListStyle.buttonContainer}
                        onPress={() => handlePress(r)}
                        onLongPress={() => handleLongPress(r)}
                    >
                        {
                            !!(longPressedList.findIndex(el => el === r) > -1) ? (
                                <LongPressActions 
                                    cancelAction={() => handleCancel(r)} 
                                    deleteAction={() => handleDelete(r)}
                                    editAction={() => handleEdit(r)}
                                />
                            ) : (
                                <RecipeCard key={r} recipe={recipes.entities[r]} navigation={navigation} />
                            )
                        }
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    recipes: recipeSlice.recipes
}))(RecipeList);