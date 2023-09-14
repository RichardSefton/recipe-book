import { StyleSheet } from "react-native";

export const recipeStyles = StyleSheet.create({
    recipeContainer: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
    },
    recipeNameContainer: {
        width: "100%",
        alignItems: "center",
    },
    recipeName: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    recipeEditContainer: {
        position: "absolute",
        right: 10,
        top: 20,
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
        backgroundColor: "#f2f2f2",
        zIndex: 1,
        borderTopLeftRadius: 20,
        elevation: 25,
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
    stepOrderLineText: {
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
        backgroundColor: "#f2f2f2",
        zIndex: 1,
        borderTopRightRadius: 20,
        elevation: 5,
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

export const recipeImageStyles = StyleSheet.create({
    container: {
        // height: "100%",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 50,
    },
    button: {
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    imagesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        height: 120,
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    image: {
        margin: 10,
        width: 100,
        height: 100,
    },
    selectedImageContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    selectedImage: {
        width: 300,
        height: 300,
    },
}); 