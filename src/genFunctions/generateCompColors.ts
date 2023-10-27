import { Color } from "../color/color.js";
import generateSplitComplementaryColors from "./generateSplitCompColors.js";

/**
 * Generates complementary colors
 * @param {Color} seedColor color that is used to generate complementary colors
 * @param {number} colorAmount amount of generated complementary colors
 * @returns {Color[]} array of generated colors
 */
export default function generateComplimentaryColors(seedColor: Color, colorAmount: number) {
    return generateSplitComplementaryColors(seedColor, colorAmount, 0)
}