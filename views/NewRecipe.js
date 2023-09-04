import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { RecipeForm, IngredientsCard, StepsCard } from '../components/editrecipe';

const NewRecipe = ({ }) => {

    return (
        <>
            <SafeAreaView style={styles.modalContainer}>
                <IngredientsCard />
                <RecipeForm />
                <StepsCard />
            </SafeAreaView>
        </>
    );
};

export default NewRecipe;