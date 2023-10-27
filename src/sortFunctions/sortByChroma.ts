import { Color } from "../color/color.js";
/**
 * returns sorted by saturation sorted array of colors
 * @param {Color} colors array of Colors
 * @returns {Color[]} sorted array of colors
 */

export default function sortByChroma(colors: Color[]): Color[] {
    return colors.sort((a, b) => {
        return a.C - b.C
    })
}