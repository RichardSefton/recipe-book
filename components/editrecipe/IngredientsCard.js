import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { ingredientsFormStyles as styles } from './styles';
import IngredientsForm from './IngredientsForm';
import Ingredients from './Ingredients';
import EditIngredientsForm from './EditIngredientsForm';

const IngredientsCard = ({ showIngredients, editIngredient }) => {
    const slideAnim = useRef(new Animated.Value(0)).current;

    //Using an animation to slide the ingredients card in and out
    //from the bottom corner. 
    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: showIngredients ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [showIngredients]);

    const translateY = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 500],
    });
    const translateX = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -500],
    });

    return (
        <Animated.View style={[
                styles.ingredientsContainer, 
                { 
                    transform: [{ translateY }, { translateX }]
                }
            ]}
        >
            {
                editIngredient ? (
                    <EditIngredientsForm />
                ) : (
                    <IngredientsForm />
                )
            }
            <Ingredients />
        </Animated.View>
    );
}

export default connect(({ recipeSlice }) => ({
    showIngredients: recipeSlice.showIngredients,
    editIngredient: recipeSlice.active.editIngredient,
}))(IngredientsCard);