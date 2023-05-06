import Color from "../color/color";
/**
 * returns sorted by saturation sorted array of colors
 * @param {Color} colors array of Colors
 * @returns {Color[]} sorted array of colors
 */

export default function sortBySaturation(colors: Color[]): Color[] {
    return colors.sort((a, b) => {
        return a.s - b.s
    })
}