import { StyleSheet } from 'react-native';

export const recipeFormStyles = StyleSheet.create({
    newRecipeFormContainer: {
        width: "100%",
        alignItems: "center",
    },
    textInput: {
        width: "90%",
        height: 50,
        fontSize: 20,
        fontWeight: "bold",
        borderBottomWidth: 3,
        borderBottomColor: "#7542f5",
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
        borderWidth: 3,
        borderColor: "#7542f5",
        fontSize: 16,
        fontWeight: "normal",
        borderRadius: 5,
    },
});

export const ingredientsFormStyles = StyleSheet.create({
    ingredientsContainer: {
        position: "absolute",
        bottom: 0,
        width: "98%",
        height: "99%",
        backgroundColor: "#fff",
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
    ingredientsFormContainer: {
        width: "100%",
        flexDirection: "column",
    },
    qtyContainer: {
        flex: 1,
        flexDirection: "row",
        width: "90%",
        marginLeft: 15,
        marginBottom: 80,
    },
    textInput: {
        marginLeft: 15,
    },
    qtyTextInput: {
        flex: 1,
        height: 50,
        fontSize: 20,
        fontWeight: "normal",
        borderBottomWidth: 3,
        borderBottomColor: "#7542f5",
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
    },
    uomButton: {
        flex: 3,
        fontSize: 20,
        fontWeight: "normal",
        borderBottomWidth: 3,
        borderBottomColor: "#7542f5",
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    uomDropdown: {
        fontSize: 20,
        fontWeight: "normal",
        borderBottomWidth: 3,
        borderBottomColor: "#7542f5",
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        flex: 1,
    },
    addIngredientButtonText: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        lineHeight: 50,
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 5,
        color: "#fff",
    },
});

export const stepsFormStyles = StyleSheet.create({
    stepsContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "98%",
        height: "99%",
        backgroundColor: "#fff",
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
});

