import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import { NewRecipeForm, IngredientsCard, StepsCard } from '../components/newrecipe';

const NewRecipe = ({ }) => {

    return (
        <>
            <SafeAreaView style={styles.modalContainer}>
                <IngredientsCard />
                <NewRecipeForm />
                <StepsCard />
            </SafeAreaView>
        </>
    );
};

export default NewRecipe;