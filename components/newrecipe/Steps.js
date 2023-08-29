import { useState, Fragment, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import { selectStepForEdit, deleteStep } from "../../redux/recipeSlice/slice";
import { ScrollView, View, Text, Pressable } from "react-native";
import { stepsFormStyles as styles, deleteStepStyles as deleteStyles } from "./styles";
import { EditIcon, DeleteIcon } from "../buttons";

const Steps = ({ steps }) => {
    const dispatch = useDispatch();
    const [stepsToDelete, setStepsToDelete] = useState([]);
    
    useEffect(() => {
        //verify that the steps to delete actually exist in the steps array
        const remove = [];
        stepsToDelete?.forEach(s => {
            if (!steps.find(step => step.id === s))
                remove.push(s);
        });
        setStepsToDelete([...stepsToDelete?.filter(s => !remove.includes(s))]);
    }, [steps]);

    // console.log('steps', steps);
    // console.log('stepsToDelete', stepsToDelete);

    const handleEditStep = (step) => {
        dispatch(selectStepForEdit(step));
    };
    const handleConfirmDeleteStep = (step) => {
        setStepsToDelete([...stepsToDelete, step.id]);
    };
    const handleCancelDelete = (step) => {
        setStepsToDelete([...stepsToDelete.filter((id) => id !== step.id)]);
    };
    const handleDeleteStep = (step) => {
        dispatch(deleteStep(step))
    }

    return (
        <ScrollView scrollEnabled={true} style={styles.stepsListContainer}>
            {steps?.map((s) => (
                <Fragment key={s.id}>
                    {!stepsToDelete?.includes(s.id) ? (
                        <View key={s.id} style={styles.stepLineContainer}>
                            <Text
                                style={[
                                    styles.stepLineText,
                                    styles.stepNoLineText,
                                ]}
                            >
                                {`${s.stepNo}`}
                            </Text>
                            <Text style={[styles.stepLineText]}>{s.step}</Text>
                            <View style={styles.editIconContainer}>
                                <EditIcon
                                    handleClick={() => handleEditStep(s)}
                                />
                            </View>
                            <View style={styles.deleteIconContainer}>
                                <DeleteIcon
                                    handleClick={() =>
                                        handleConfirmDeleteStep(s)
                                    }
                                />
                            </View>
                        </View>
                    ) : (
                        <View style={[deleteStyles.deleteStepContainer]}>
                            <View
                                style={deleteStyles.deleteStepButtonsContainer}
                            >
                                <Pressable 
                                    style={[deleteStyles.button, deleteStyles.deleteButton]}
                                    onPress={() => handleDeleteStep(s)}
                                >
                                    <Text style={deleteStyles.buttonText}>
                                        Delete
                                    </Text>
                                </Pressable>
                                <Pressable 
                                    style={deleteStyles.button}
                                    onPress={() => handleCancelDelete(s)}
                                >
                                    <Text style={deleteStyles.buttonText}>
                                        Cancel
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </Fragment>
            ))}
        </ScrollView>
    );
};

export default connect(({ recipeSlice }) => ({
    steps: recipeSlice.recipe.steps,
}))(Steps);
