import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../../assets/constant/index'

export default StyleSheet.create({
    imageContainer: {
        width: SIZES.width,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    bgImage: {
        width: 335,
        height: 335,
        resizeMode: "contains"
    },
    textContainer: {
        alignItems: "center",
        marginVertical: SIZES.base * 2
    },
    titleContainer: {
        paddingHorizontal: SIZES.base * 4,
        marginVertical: SIZES.base * 4
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold"
    },

    description: {
        fontSize: 16,
        textAlign: "center",
        opacity: 0.4,
        marginTop: 15, lineHeight: 28
    },
})