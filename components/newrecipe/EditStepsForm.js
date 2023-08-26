import { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { RectangleButton as Button } from '../buttons';
import { connect, useDispatch } from 'react-redux';
import { cancelEditStep, saveEditStep } from '../../redux/recipeSlice/slice';
import { stepsFormStyles as styles } from './styles';

const EditStepsForm = ({ activeStep }) => {
    const [step, setStep] = useState(activeStep.step || "");
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            setStep("");
        }
    }, []);

    const handleUpdateStep = () => {
        dispatch(saveEditStep({ ...activeStep, step }));
    };

    const handleCancelUpdateStep = () => {
        dispatch(cancelEditStep());
    };

    return (
        <View styles={styles.stepsFormContainer}>
            <TextInput
                style={styles.textArea}
                onChange={(e) => setStep(e.nativeEvent.text)}
                value={step}
                placeholder="Step"
                multiline={true}
            />
            <View style={styles.editStepButtonContainer}>
                <Button pressAction={handleUpdateStep}>
                    <Text style={styles.addStepButtonText}>Save Changes</Text>
                </Button>
            </View>
            <View style={styles.deleteStepButtonContainer}>
                <Button pressAction={handleCancelUpdateStep}>
                    <Text style={styles.addStepButtonText}>Cancel Changes</Text>
                </Button>
            </View>
        </View>
    );
};

export default connect(({ recipeSlice }) => ({
    activeStep: recipeSlice.active.step,
}))(EditStepsForm);