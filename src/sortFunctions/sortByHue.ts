import Color from "../color/color";
/**
 * returns sorted by hue sorted array of colors
 * @param {Color} colors array of Colors
 * @returns {Color[]} sorted array of colors
 */

export default function sortByHue(colors: Color[]): Color[] {
    return colors.sort((a, b) => {
        let h1 = a.h
        let h2 = b.h
        if (a.h > 180) h1 -= 360
        if (b.h > 180) h2 -= 360
        return h1 - h2
    })
}