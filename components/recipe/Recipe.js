import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { recipeStyles as styles } from "./styles";
import { clearRecipe } from '../../redux/recipeSlice/slice';
import { EditIcon } from '../buttons';
import RecipeImages from './RecipeImages';

const Recipe = ({ recipeId, recipeName, recipeDescription, navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearRecipe());
        }
    }, []);

    const handleEdit = () => {
        navigation.navigate("EditRecipe", { recipeId });
    };

    return (
        <View style={styles.recipeContainer}>
            <View style={styles.recipeNameContainer}>
                <Text style={styles.recipeName}>{recipeName}</Text>
                <View style={styles.recipeEditContainer}>
                    <EditIcon handleClick={handleEdit} />
                </View>
            </View>

            <Text style={styles.recipeDescription}>{recipeDescription}</Text>

            <RecipeImages />
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    recipeId: recipeSlice.recipe.id,
    recipeName: recipeSlice.recipe.name,
    recipeDescription: recipeSlice.recipe.description
}))(Recipe);