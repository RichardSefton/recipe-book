import { View, Text, Image, Pressable } from 'react-native';
import { recipeCardStyle } from './style';

const RecipeCard = ({ recipe, navigation }) => {
    const handlePress = () => {
        navigation.navigate("Recipe", { recipe });
    };

    return (
        <View style={recipeCardStyle.container}>
            <View style={recipeCardStyle.details}>
                <Text style={recipeCardStyle.titleText}>{recipe.name}</Text>
                <Text style={recipeCardStyle.descriptionText}>
                    {recipe.description}
                </Text>
            </View>
            <Pressable 
                style={recipeCardStyle.buttonContainer}
                onPress={handlePress}
            >
                <Image
                    style={recipeCardStyle.button}
                    source={require("../../assets/arrow_forward.png")}
                />
            </Pressable>
        </View>
    );
};

export default RecipeCard;