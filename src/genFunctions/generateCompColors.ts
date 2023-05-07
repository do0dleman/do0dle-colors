import Color from "../color/color";
import generateSplitComplementaryColors from "./generateSplitCompColors";

/**
 * Generates complementary colors
 * @param seedColor color that is used to generate complementary colors
 * @param colorAmount amount of generated complementary colors
 * @returns {Color[]} array of generated colors
 */
export default function generateComplimentaryColors(seedColor: Color, colorAmount: number) {
    return generateSplitComplementaryColors(seedColor, colorAmount, 0)
}