import { useState, useEffect } from "react";
import { View, TextInput, Text } from "react-native";
import {
    stepsFormStyles as styles,
} from "./styles";
import { RectangleButton as Button } from "../buttons";
import { useDispatch, connect } from "react-redux";
import { addStep } from "../../redux/recipeSlice/slice";

const StepsForm = ({ steps }) => {
    const dispatch = useDispatch();
    const [step, setStep] = useState("");

    useEffect(() => {
        //cleanup to reset the form when we leave the page
        return () => {
            setStep("");
        };
    }, []);

    const handleAddStep = () => {
        if (!(!!step)) return;
        dispatch(addStep({ stepOrder: steps.length + 1, step }));
        setStep("");
    };

    console.log(steps);

    return (
        <View styles={styles.stepsFormContainer}>
            <TextInput
                style={styles.textArea}
                onChange={(e) => setStep(e.nativeEvent.text)}
                value={step}
                placeholder="Step"
                multiline={true}
            />
            <View style={styles.addStepButtonContainer}>
                <Button pressAction={handleAddStep}>
                    <Text style={styles.addStepButtonText}>
                        Add Step
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    steps: recipeSlice.recipe.steps,
}))(StepsForm);
