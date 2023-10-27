import { Color } from "../color/color.js";
import ndRand from "../randomFuntions/ndRand.js"
import round from "../utils/round.js";

/**
 * returns an array of colors with changed chroma except the first one according to normal distribution
 * @param {Color} colors array of colors
 * @returns {Color[]}
 */
export default function mapChroma(colors: Color[]): Color[] {

    const initialS = colors[0].C
    const sigma = Math.random() / 1.8 + 0.7

    return colors.map((color, index) => {

        if (index == 0) return color

        color.C = round(ndRand(initialS, sigma))
        return color
    })
}