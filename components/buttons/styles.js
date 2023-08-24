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
});

export const buttonStylePressed = StyleSheet.create({
    buttonLarge: {
        ...buttonStyle.buttonLarge,
        backgroundColor: "#7542f5",
        borderColor: "#fff",
        transform: [{ translateY: 2 }],
    },
    buttonSmall: {
        ...buttonStyle.buttonSmall,
        backgroundColor: "#7542f5",
        borderColor: "#fff",
        transform: [{ translateY: 2 }],
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
});
