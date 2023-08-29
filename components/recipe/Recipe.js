import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { recipeStyles as styles } from "./styles";
import { clearRecipe } from '../../redux/recipeSlice/slice';

const Recipe = ({ recipeName, recipeDescription }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearRecipe());
        }
    }, []);

    return (
        <View style={styles.recipeContainer}>
            <Text style={styles.recipeName}>{recipeName}</Text>
            <Text style={styles.recipeDescription}>{recipeDescription}</Text>
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    recipeName: recipeSlice.recipe.name,
    recipeDescription: recipeSlice.recipe.description
}))(Recipe);