import { useState } from 'react';
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { NewRecipeForm } from '../components/newrecipe';

const NewRecipe = ({ navigator }) => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');


    return (
        <SafeAreaView style={styles.modalContainer}>
            <NewRecipeForm />
        </SafeAreaView>
    );
};

export default NewRecipe;