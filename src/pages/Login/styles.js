import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#fff",
    },
    wellcome: {
        fontSize: 15,
        color: "#0D2151",
        fontWeight: "bold",
        marginTop: 20,
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    tab: {
        backgroundColor: "#f0f0f5",
        borderRadius: 8,
        height: 50,
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    active: {
        backgroundColor: "#f0f0f5",
        borderRadius: 8,
        height: 50,
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#0D2151",
        borderBottomWidth: 3,
    },
    tabContent: {
        marginTop: 20,
    },
    content: {
        padding: 20,
        backgroundColor: "#f0f0f5",
        borderRadius: 8,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        height: 50,
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 15,
    },
    links: {
        marginTop: 20,
    },
    uteis: {
        fontSize: 15,
        color: "#0D2151",
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#0D2151",
        borderRadius: 8,
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    btnText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },
});
