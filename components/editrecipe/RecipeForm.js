import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { TextInput, View } from 'react-native';
import { recipeFormStyles as styles } from "./styles";
import { setRecipeName, setRecipeDescription, clearIngredients, clearSteps } from '../../redux/recipeSlice/slice';

const RecipeForm = ({ recipeName, recipeDescription }) => {
    const dispatch = useDispatch();

    const handleRecipeNameChange = name => dispatch(setRecipeName(name));
    const handleRecipeDescriptionChange = description => dispatch(setRecipeDescription(description));
    
    useEffect(() => {
        //cleanup to reset the form when we leave the page
        return () => {
            dispatch(setRecipeName(''));
            dispatch(setRecipeDescription(''));
            dispatch(clearIngredients());
            dispatch(clearSteps());
        }
    }, []);

    return (
        <View style={styles.RecipeFormContainer}>
            <TextInput 
                style={styles.textInput}
                onChange={e => handleRecipeNameChange(e.nativeEvent.text)}
                value={recipeName}
                placeholder="Recipe Name"
            />
            <TextInput 
                style={[styles.textInput, styles.textArea]}
                onChange={e => handleRecipeDescriptionChange(e.nativeEvent.text)}
                value={recipeDescription}
                placeholder="Recipe Description"
                multiline={true}
                numberOfLines={5}
            />
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    recipeName: recipeSlice.recipe.name,
    recipeDescription: recipeSlice.recipe.description
}))(RecipeForm);