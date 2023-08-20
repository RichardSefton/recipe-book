import { useState, useEffect, useContext } from "react";
import { ScrollView, View } from "react-native";
import { recipeListStyle } from "./style";
import RecipeCard from "./RecipeCard";
import { DatabaseContext, getRecipes } from "../../datastore";

const RecipeList = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);

    const { conn } = useContext(DatabaseContext);

    useEffect(() => {
        console.log("Home screen mounted");
        getRecipes(conn)
            .then((r) => setRecipes(r))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={recipeListStyle.container}>
            <ScrollView scrollEnabled={true}>
                {recipes.map((r) => (
                    <RecipeCard key={r.id} recipe={r} navigation={navigation} />
                ))}
            </ScrollView>
        </View>
    );
};

export default RecipeList;
