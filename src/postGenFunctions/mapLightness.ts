import { Color } from "../color/color.js";
import rangeRandom from "../utils/rangeRandom.js";

/**
 * returns an array of colors with evenly changed lightness except the first one 
 * @param {Color} colors array of colors
 * @param {number} step step between iterations, by default is in [0 : 1/color.length]
 * @returns {Color[]}
 */
export default function mapLightness(colors: Color[], step?: number): Color[] {

    if (step === undefined) step = (1 / colors.length) * rangeRandom(.4, .7)

    let iterations = 0 // this number is used to "reverse" the loop
    const sign = Math.random() > .5 ? 1 : -1

    for (let i = 1; i < colors.length; i++) {
        let color = colors[i]

        if (iterations > 0) {
            color.shiftL(sign * step * (i - iterations + 1))
            continue
        }
        const expectedLightness = color.L - sign * step * i
        if (sign === 1 && expectedLightness < 0.1 || sign === -1 && expectedLightness > .9) {
            iterations = i
            color.shiftL(sign * step)
            continue
        }

        if (iterations === 0) color.shiftL(-sign * step * i)

    }

    return colors
}