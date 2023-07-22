import { Color } from "../color/color";
/**
 * returns sorted by lightness sorted array of colors
 * @param {Color} colors array of Colors
 * @returns {Color[]} sorted array of colors
 */

export default function sortByLightness(colors: Color[]): Color[] {
    return colors.sort((a, b) => {
        return a.l - b.l
    })
}