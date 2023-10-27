import { Color } from "../color/color.js";
/**
 * returns sorted by lightness sorted array of colors
 * @param {Color} colors array of Colors
 * @returns {Color[]} sorted array of colors
 */

export default function sortByLightness(colors: Color[]): Color[] {
    return colors.sort((a, b) => {
        return a.L - b.L
    })
}