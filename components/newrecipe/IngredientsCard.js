import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';

const IngredientsCard = ({ showIngredients }) => {
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

        </Animated.View>
    );
}

export default connect(({ recipeSlice }) => ({
    showIngredients: recipeSlice.showIngredients,
}))(IngredientsCard);