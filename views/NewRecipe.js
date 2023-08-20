import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

const NewRecipe = ({ navigator }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>NEW RECIPE</Text>
        </SafeAreaView>
    );
};

export default NewRecipe;