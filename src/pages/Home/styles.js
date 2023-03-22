import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#fff",
    },
    info: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    details: {
        color: "black",
        fontSize: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    numberNif: {
        fontSize: 18,
        marginTop: 5,
        color: "#0D2151",
        fontWeight: "bold",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 110,
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: 'white',
    },
    sFiscal: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "green",
        padding: 12,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    service: {
        marginTop: 15,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,

        borderColor: "#0084cc",
        borderWidth: 2,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    serviceTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
