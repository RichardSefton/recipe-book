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
    },
    buttonLargeText: {
        color: "#7542f5",
        fontWeight: "200",
        fontSize: 100,
        bottom: 20,
    },
});

export const buttonStylePressed = StyleSheet.create({
    buttonLarge: {
        ...buttonStyle.buttonLarge,
        backgroundColor: "#7542f5",
        borderColor: "#fff",
        transform: [{ translateY: 2 }]
    },
    buttonLargeText: {
        ...buttonStyle.buttonLargeText,
        color: "#fff",
    },
});
