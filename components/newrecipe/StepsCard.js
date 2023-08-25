import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { connect } from "react-redux";
import { stepsFormStyles as styles } from "./styles";
import NewStepsForm from "./NewStepsForm";
import Steps from "./Steps";

const StepsCard = ({ showSteps }) => {
    const slideAnim = useRef(new Animated.Value(0)).current;

    //Using an animation to slide the ingredients card in and out
    //from the bottom corner.
    useEffect(() => {
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
        >
            <NewStepsForm />
            <Steps />
        </Animated.View>
    );
};

export default connect(({ recipeSlice }) => ({
    showSteps: recipeSlice.showSteps,
}))(StepsCard);
