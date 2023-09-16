import { StyleSheet } from 'react-native';

export const recipeListStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#f2f2f2",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export const recipeCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "#7542f5",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: "100%",
        marginTop: 10,
        height: 75,
        backgroundColor: "#fff",
    },
    details: {
        flex: 30,
        padding: 10,
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
    imageContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
});

export const longPressStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#F5F0FF",
        width: "100%",
        marginTop: 10,
        height: 75,
    },
    buttonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainerSmall: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonDelete: {
        backgroundColor: "#7542f5",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        width: "90%",
        margin: 10,
        elevation: 20,
    },
    buttonEdit: {
        backgroundColor: "#7542f5",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        width: "90%",
        margin: 10,
        elevation: 20,
    },
    buttonCancel: {
        backgroundColor: "#7542f5",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        width: "90%",
        elevation: 20,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
});