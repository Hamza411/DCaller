import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../../../assets/constant';

export default StyleSheet.create({
    bottomRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.base * 2,
        paddingVertical: SIZES.base * 2,
    },
    allignDots: {
        flexDirection: "row",
        alignItems: "center",
    },

    dotsContainer: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 8,
    },

    next: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.redColor
    },

    lightNext: {
        fontSize: 18,
        color: COLORS.white,
        opacity: 0.4
    },
    nextIcon: {
        fontSize: 25,
        color: COLORS.white,
        marginLeft: -15
    },

    getStart: {
        paddingHorizontal: SIZES.base * 2,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.redColor,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    innerText: {
        color: COLORS.white,
        fontSize: 18,
        marginLeft: SIZES.base
    },
})