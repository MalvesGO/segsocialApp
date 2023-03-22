import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: "bold",
        color: "#0D2151",
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
    serviceSubtitle: {
        fontSize: 15,
        color: "#0D2151",
        marginTop: 5,
    },
});
