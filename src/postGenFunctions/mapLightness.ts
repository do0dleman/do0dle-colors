import { Color } from "../color/color.js";
import ndRand from "../randomFuntions/ndRand.js";
import round from "../utils/round.js";

/**
 * returns an array of colors with changed lightness except the first 
 * one according to normal distribution
 * @param {Color} colors array of colors
 * @returns {Color[]}
 */
export default function mapLightness(colors: Color[]): Color[] {

    const initialL = colors[0].L
    const sigma = Math.random() / 1.8 + 0.7

    return colors.map((color, index) => {

        if (index == 0) return color

        color.L = round(ndRand(initialL, sigma))
        return color
    })
}