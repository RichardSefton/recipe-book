import { StyleSheet } from "react-native";

export const menuStyle = StyleSheet.create({
    bar: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 75,
        backgroundColor: "#7542f5",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        shadowColor: "#000",
        shadowOffset: {
            width: -10,
            height: -10,
        },
        shadowRadius: 3.84,
        elevation: 25,
        opacity: 0.99,
        shadowOpacity: 1,
    },
});

