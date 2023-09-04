import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import {
    RecipeForm,
    IngredientsCard,
    StepsCard,
} from "../components/editrecipe";

const EditRecipe = ({ route }) => {
    const { recipeId } = route.params;

    return (
        <>
            <SafeAreaView style={styles.modalContainer}>
                <IngredientsCard recipeId={recipeId} />
                <RecipeForm recipeId={recipeId} />
                <StepsCard recipeId={recipeId} />
            </SafeAreaView>
        </>
    );
};

export default EditRecipe;
