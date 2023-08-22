import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    newRecipeFormContainer: {
        width: "100%",
        alignItems: "center",
        // justifyContent: "center"
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
    }
});