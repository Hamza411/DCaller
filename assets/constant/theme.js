import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")


export const COLORS = {
    bgColor: "#FAF9F6",
    black: "#000000",
    redColor: "#FF5678",
    white: "#FFFFFF",
}

export const SIZES = {
    base: 10,
    width,
    height,
}

const theme = { SIZES, COLORS }

export default theme;