import { View, Text, Image, Pressable } from 'react-native';
import { recipeCardStyle } from './style';

const RecipeCard = ({ recipe }) => {
    return (
        <View style={recipeCardStyle.container}>
            <View style={recipeCardStyle.details}>
                <Text style={recipeCardStyle.titleText}>{recipe.title}</Text>
                <Text style={recipeCardStyle.descriptionText}>
                    {recipe.description}
                </Text>
            </View>
            <Pressable style={recipeCardStyle.buttonContainer}>
                <Image
                    style={recipeCardStyle.button}
                    source={require("../../assets/arrow_forward.png")}
                />
            </Pressable>
        </View>
    );
};

export default RecipeCard;