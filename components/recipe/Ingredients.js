import { Fragment } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from "react-native";
import { ingredientsStyles as styles } from "./styles";

const Ingredients = ({ ingredients }) => {
    //console.log(ingredients);
    
    return (
        <ScrollView
            scrollEnabled={true}
            style={styles.ingredientsListContainer}
        >
            {ingredients?.map((i) => (
                <Fragment key={i.id}>
                    <View key={i.id} style={styles.ingredientLineContainer}>
                        <Text
                            style={[
                                styles.ingredientLineText,
                                styles.qtyLineText,
                            ]}
                        >
                            {i.quantity}
                        </Text>
                        <Text
                            style={[
                                styles.ingredientLineText,
                                styles.uomLineText,
                            ]}
                        >
                            {i.uom}
                        </Text>
                        <Text
                            style={[
                                styles.ingredientLineText,
                                styles.ingredientLineText,
                            ]}
                        >
                            {i.ingredient}
                        </Text>
                    </View>
                </Fragment>
            ))}
        </ScrollView>
    );
}

export default connect(({ recipeSlice }) => ({
    ingredients: recipeSlice.recipe.ingredients,
}))(Ingredients);