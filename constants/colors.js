import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#85e8ff", // light blue
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',

};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 15, // 30 for more rounded corners
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    
    // for animated loading screen
    INPUT_RANGE_START: 0,
    INPUT_RANGE_END: 1,
    OUTPUT_RANGE_START: -281,
    OUTPUT_RANGE_END: 0,
    ANIMATION_TO_VALUE: 1,
    ANIMATION_DURATION: 25000,

    // app dimensions
    width,
    height
};


export const FONTS = {
    //export your fonts here
    
};



const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;