import { StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
    touchableOpacityStyle: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#7542f5",
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 50,
        bottom: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonLarge: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#7542f5",
        backgroundColor: "#fff",
        width: 100,
        height: 100,
        borderRadius: 50,
        bottom: 40,
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        elevation: 5,
    },
    buttonSmall: {
        borderWidth: 1,
        borderRadius: 35,
        borderColor: "#7542f5",
        backgroundColor: "#fff",
        width: 70,
        height: 70,
        borderRadius: 35,
        bottom: 40,
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        elevation: 5,
    },
    buttonLargeText: {
        color: "#7542f5",
        fontWeight: "200",
        fontSize: 100,
        bottom: 20,
    },
    buttonLargeImage: {
        width: 60,
        height: 60,
        tintColor: "#7542f5",
        // bottom: 20,
    },
    buttonSmallText: {
        color: "#7542f5",
        fontWeight: "200",
        fontSize: 100,
        bottom: 20,
    },
    buttonSmallImage: {
        width: 60,
        height: 60,
        tintColor: "#7542f5",
        // bottom: 20,
    },
    buttonRectangle: {
        width: "90%",
        height: 50,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#7542f5",
        textAlign: "center",
        justifyContent: "center",
        // zIndex: 99,
        elevation: 50,
    },
    disabled: {
        borderColor: "#ccc",
        tintColor: "#ccc",
        color: "#ccc",
        opacity: 0.9,
    },
    textDisabled: {
        color: "#ccc",
    },
    imageDisabled: {
        tintColor: "#ccc",
    },
});

export const buttonStylePressed = StyleSheet.create({
    buttonLarge: {
        ...buttonStyle.buttonLarge,
        backgroundColor: "#7542f5",
        borderColor: "#fff",
        transform: [{ translateY: 2 }],
        elevation: 1,
    },
    buttonSmall: {
        ...buttonStyle.buttonSmall,
        backgroundColor: "#7542f5",
        borderColor: "#fff",
        transform: [{ translateY: 2 }],
        elevation: 1,
    },
    buttonLargeText: {
        ...buttonStyle.buttonLargeText,
        color: "#fff",
    },
    buttonLargeImage: {
        ...buttonStyle.buttonLargeImage,
        tintColor: "#fff",
    },
    buttonSmallText: {
        ...buttonStyle.buttonSmallText,
        color: "#fff",
    },
    buttonSmallImage: {
        ...buttonStyle.buttonSmallImage,
        tintColor: "#fff",
    },
    buttonRectangle: {
        ...buttonStyle.buttonRectangle,
        backgroundColor: "#5530b8",
        elevation: 10,
    },
});

export const editIconStyles = StyleSheet.create({
    container: {
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 25,
        height: 25,
        tintColor: "#7542f5",
    },
});

export const deleteIconStyles = StyleSheet.create({
    container: {
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 25,
        height: 25,
        tintColor: "#7542f5",
    },
});

