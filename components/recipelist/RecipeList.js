import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { recipeListStyle } from "./style";
import RecipeCard from "./RecipeCard";
import { connect, useDispatch } from 'react-redux';
import { loadRecipes } from "../../redux/recipeSlice/slice";

const RecipeList = ({ navigation, recipes={} }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRecipes());
    }, []);

    return (
        <View style={recipeListStyle.container}>
            <ScrollView scrollEnabled={true}>
                {Object.keys(recipes.entities).map((r) => (
                    <RecipeCard key={r} recipe={recipes.entities[r]} navigation={navigation} />
                ))}
            </ScrollView>
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    recipes: recipeSlice.recipes
}))(RecipeList);