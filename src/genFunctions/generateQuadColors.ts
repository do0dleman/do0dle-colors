import Color from "../color/color";
import generateTetraidicColors from "./generateTetrColors";

/**
 * Generates quadratic colors
 * @param {Color} seedColor color that is used to generate quadratic colors
 * @param {number} colorAmount amount of generated quadratic colors 
 * @returns {Color[]} array of generated colors
 */
export default function generateQuadraticColors(seedColor: Color, colorAmount: number): Color[] {
    return generateTetraidicColors(seedColor, colorAmount, 1)
}