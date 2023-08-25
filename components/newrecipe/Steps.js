import { connect } from "react-redux";
import { ScrollView, View, Text } from "react-native";
import { stepsFormStyles as styles } from "./styles";

const Steps = ({ steps }) => (
    <ScrollView scrollEnabled={true} style={styles.stepsListContainer}>
        {console.log(steps)}
        {steps.map((s) => (
            <View key={s.id} style={styles.stepLineContainer}>
                <Text style={[styles.stepLineText, styles.stepNoLineText]}>
                    {`${s.stepNo}`}
                </Text>
                <Text
                    style={[
                        styles.stepLineText,
                    ]}
                >
                    {s.step}
                </Text>
            </View>
        ))}
    </ScrollView>
);

export default connect(({ recipeSlice }) => ({
    steps: recipeSlice.recipe.steps,
}))(Steps);
