import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../../../assets/constant'

export default StyleSheet.create({
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.base * 2
    },
    TopButton: {
        fontSize: 20,
        color: COLORS.black,
    },
    ButtonPadding: {
        padding: SIZES.base
    }
})