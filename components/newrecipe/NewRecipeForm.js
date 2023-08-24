import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { TextInput, View } from 'react-native';
import { recipeFormStyles as styles } from "./styles";
import { setRecipeName, setRecipeDescription } from '../../redux/recipeSlice/slice';

const NewRecipeForm = ({ recipeName, recipeDescription }) => {
    const dispatch = useDispatch();

    const handleRecipeNameChange = name => dispatch(setRecipeName(name));
    const handleRecipeDescriptionChange = description => dispatch(setRecipeDescription(description));
    
    useEffect(() => {
        //cleanup to reset the form when we leave the page
        return () => {
            dispatch(setRecipeName(''));
            dispatch(setRecipeDescription(''));
        }
    }, []);

    return (
        <View style={styles.newRecipeFormContainer}>
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
}))(NewRecipeForm);