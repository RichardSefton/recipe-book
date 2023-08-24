import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { connect } from "react-redux";
import { stepsFormStyles as styles } from "./styles";

const StepsCard = ({ showSteps }) => {
    const slideAnim = useRef(new Animated.Value(0)).current;

    //Using an animation to slide the ingredients card in and out
    //from the bottom corner.
    useEffect(() => {
        console.log({ showSteps });
        Animated.timing(slideAnim, {
            toValue: showSteps ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [showSteps]);

    const translateY = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 500],
    });
    const translateX = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 500],
    });

    return (
        <Animated.View
            style={[
                styles.stepsContainer,
                {
                    transform: [{ translateY }, { translateX }],
                },
            ]}
        ></Animated.View>
    );
};

export default connect(({ recipeSlice }) => ({
    showSteps: recipeSlice.showSteps,
}))(StepsCard);
