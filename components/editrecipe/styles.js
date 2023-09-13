import { StyleSheet } from 'react-native';

export const recipeFormStyles = StyleSheet.create({
    RecipeFormContainer: {
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
        elevation: 5,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
        borderWidth: 3,
        borderColor: "#7542f5",
        fontSize: 16,
        fontWeight: "normal",
        borderRadius: 5,
        elevation: 10,
    },
});

export const ingredientsFormStyles = StyleSheet.create({
    ingredientsContainer: {
        position: "absolute",
        bottom: 0,
        width: "98%",
        height: "99%",
        backgroundColor: "#f2f0f7",
        zIndex: 1,
        borderTopRightRadius: 20,
             elevation: 5,
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
        backgroundColor: "#fff",
        elevation: 5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
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
        backgroundColor: "#f2f0f7",
        backgroundColor: "#fff",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        // elevation: 5,
    },
    uomDropdown: {
        fontSize: 20,
        fontWeight: "normal",
        borderBottomWidth: 3,
        borderBottomColor: "#7542f5",
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 5,
    },
    buttonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        // flex: 1,
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
    editStepButtonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    deleteStepButtonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    editIconContainer: {
        width: "10%",
        justifyContent: "flex-start",
        textAlign: "right",
    },
    deleteIconContainer: {
        width: "10%",
        justifyContent: "flex-start",
        textAlign: "right",
    },
    editIngredientButtonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    deleteIngredientButtonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
});

export const stepsFormStyles = StyleSheet.create({
    stepsContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "98%",
        height: "99%",
        backgroundColor: "#f2f0f7",
        zIndex: 1,
        borderTopLeftRadius: 20,
        elevation: 5,
    },
    stepsFormContainer: {
        width: "100%",
        flexDirection: "column",
    },
    textInput: {
        width: "90%",
        height: 50,
        fontSize: 20,
        fontWeight: "bold",
        borderBottomWidth: 3,
        borderBottomColor: "#7542f5",
        marginBottom: 20,
        marginLeft: 15,
        padding: 10,
        borderRadius: 5,
    },
    textArea: {
        height: 100,
        width: "90%",
        marginLeft: 15,
        marginTop: 10,
        textAlignVertical: "top",
        borderWidth: 3,
        borderColor: "#7542f5",
        fontSize: 16,
        fontWeight: "normal",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#fff",
        elevation: 5,
    },
    addStepButtonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    editStepButtonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    deleteStepButtonContainer: {
        width: "100%",
        height: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    addStepButtonText: {
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
    editIconContainer: {
        width: "10%",
        justifyContent: "flex-start",
        textAlign: "right",
    },
    deleteIconContainer: {
        width: "10%",
        justifyContent: "flex-start",
        textAlign: "right",
    },
});

export const deleteStepStyles = StyleSheet.create({
    deleteStepContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginBottom: 10,
        marginRight: 20,
        borderColor: "#7542f5",
        borderBottomWidth: 1,
        textAlign: "left",
        paddingBottom: 10,
    },
    deleteStepButtonsContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 5,
        color: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    button: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#7542f5",
    },
    deleteButton: {
        backgroundColor: "#f00",
    },  
    buttonText: {
        padding: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
    },
});

export const deleteIngredientStyles = StyleSheet.create({
    deleteIngredientContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginBottom: 10,
        marginRight: 20,
        borderColor: "#7542f5",
        borderBottomWidth: 1,
        textAlign: "left",
        paddingBottom: 10,
    },
    deleteIngredientButtonsContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 5,
        color: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    button: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#7542f5",
    },
    deleteButton: {
        backgroundColor: "#f00",
    },
    buttonText: {
        padding: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
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
        // justifyContent: 'flex-start',
        // flexDirection: 'column',
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
        position: "absolute",
        height: 580,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    selectedImage: {
        width: 200,
        height: 200,
    },
}); 