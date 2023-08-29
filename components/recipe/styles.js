import { StyleSheet } from "react-native";

export const recipeStyles = StyleSheet.create({
    recipeContainer: {
        width: "100%",
        alignItems: "center",
    },
    recipeName: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    recipeDescription: {
        fontSize: 18,
        marginTop: 20,
    },
});

export const stepsStyles = StyleSheet.create({
    stepsContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "98%",
        height: "99%",
        backgroundColor: "#f2f0f7",
        zIndex: 1,
        borderTopLeftRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 3.84,
        elevation: 5,
        opacity: 0.99,
        shadowOpacity: 0.1,
    },
    stepsListContainer: {
        marginBottom: 125,
        padding: 10,
    },
    stepLineContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginBottom: 10,
        marginRight: 20,
        borderColor: "#7542f5",
        borderBottomWidth: 1,
        textAlign: "left",
    },
    stepLineText: {
        fontSize: 14,
        fontWeight: "normal",
        textAlign: "left",
        justifyContent: "flex-start",
        width: "70%",
    },
    stepNoLineText: {
        width: "10%",
        justifyContent: "flex-start",
        textAlign: "left",
        fontWeight: "bold",
    },
});

export const ingredientsStyles = StyleSheet.create({
    ingredientsContainer: {
        position: "absolute",
        bottom: 0,
        width: "98%",
        height: "99%",
        backgroundColor: "#f2f0f7",
        zIndex: 1,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 3.84,
        elevation: 5,
        opacity: 0.99,
        shadowOpacity: 0.1,
    },
    ingredientsListContainer: {
        marginTop: 50,
        marginBottom: 125,
        padding: 10,
    },
    ingredientLineContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginBottom: 10,
        borderColor: "#7542f5",
        borderBottomWidth: 1,
        textAlign: "left",
    },
    qtyLineText: {
        width: "10%",
        textAlign: "center",
    },
    uomLineText: {
        width: "20%",
        textAlign: "left",
    },
    ingredientLineText: {
        width: "50%",
        fontSize: 14,
        fontWeight: "normal",
        textAlign: "left",
        justifyContent: "flex-start",
    },
});