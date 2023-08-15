import { StyleSheet } from 'react-native';

export const recipeListStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

export const recipeCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#F5F0FF",
        width: "100%",
        marginTop: 10,
    },
    details: {
        flex: 30,
        padding: 10,
    },
    buttonContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        zIndex: 1,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    descriptionText: {
        fontSize: 14,
    },
});