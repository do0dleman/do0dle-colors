import Color from "../color/color";
import ndRand from "../randomFuntions/ndRand"
import round from "../utils/round";

/**
 * returns an array of colors with changed saturation except the first 
 * one according to normal distribution
 * @param {Color} colors array of colors
 * @returns {Color[]}
 */
export default function mapSaturation(colors: Color[]): Color[] {
    const initialS = colors[0].s

    return colors.map((color, index) => {

        if (index == 1) return color

        color.s = round(ndRand(initialS))
        return color
    })
}