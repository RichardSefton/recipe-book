import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 40 : 0,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        // paddingTop: Platform.OS === "android" ? 40 : 0,
        // alignItems: "center",
        // justifyContent: "center",
    },
});
