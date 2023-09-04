import { View, Text, Image } from 'react-native';
import { recipeCardStyle } from './style';

const RecipeCard =   ({ recipe }) => {
    return (
        <View style={recipeCardStyle.container}>
            <View style={recipeCardStyle.details}>
                <Text style={recipeCardStyle.titleText}>{recipe.name}</Text>
                <Text style={recipeCardStyle.descriptionText}>
                    {recipe.description}
                </Text>
            </View>
            <View style={recipeCardStyle.imageContainer}>
                <Image
                    style={recipeCardStyle.button}
                    source={require("../../assets/arrow_forward.png")}
                />
            </View>
        </View>
    );
};

export default RecipeCard;