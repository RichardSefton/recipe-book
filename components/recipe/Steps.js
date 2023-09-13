import { Fragment } from 'react';
import { connect } from "react-redux";
import { ScrollView, View, Text } from "react-native";
import { stepsStyles as styles} from "./styles";

const Steps = ({ steps }) => {
    console.log(steps);
    return (
        <ScrollView scrollEnabled={true} style={styles.stepsListContainer}>
            {steps?.map((s) => (
                <Fragment key={s.id}>
                    <View key={s.id} style={styles.stepLineContainer}>
                        <Text
                            style={[
                                styles.stepLineText,
                                styles.stepOrderLineText,
                            ]}
                        >
                            {`${s.stepOrder}`}
                        </Text>
                        <Text style={[styles.stepLineText]}>{s.step}</Text>
                    </View>
                </Fragment>
            ))}
        </ScrollView>
    );
};

export default connect(({ recipeSlice }) => ({
    steps: recipeSlice.recipe.steps,
}))(Steps);
