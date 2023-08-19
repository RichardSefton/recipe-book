import { ScrollView, View, Text } from "react-native";
import { recipeListStyle } from "./style";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ navigation }) => {
    const arr = new Array(100).fill(0).map((_, i) => ({ id: i, title: "Recipe", description: "This is a recipe...." }));
    
    return (
        <View style={recipeListStyle.container}>
            <ScrollView
                scrollEnabled={true}
            >
                {
                    arr.map(r => (
                        <RecipeCard 
                            key={r.id} 
                            recipe={r} 
                            navigation={navigation}/>
                        )
                    )
                }
            </ScrollView>
        </View>
    );
};

export default RecipeList;