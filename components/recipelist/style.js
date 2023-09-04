import { StyleSheet } from 'react-native';

export const recipeListStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
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
        backgroundColor: "#F5F0FF",
        width: "100%",
        marginTop: 10,
        height: 75,
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
        backgroundColor: "#FF0000",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        width: "90%",
        margin: 10,
        shadowColor: "#000",
        borderRadius: 5,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 15,
        elevation: 20,
        shadowOpacity: 0.5,
    },
    buttonEdit: {
        backgroundColor: "#00FF00",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        width: "90%",
        margin: 10,
        shadowColor: "#000",
        borderRadius: 5,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 15,
        elevation: 20,
        shadowOpacity: 0.5,
    },
    buttonCancel: {
        backgroundColor: "#0000FF",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        width: "90%",
        shadowColor: "#000",
        borderRadius: 5,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 15,
        elevation: 20,
        shadowOpacity: 0.5,
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    }
});