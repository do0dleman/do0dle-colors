import { Color } from "../color/color.js";
import rangeRandom from "../utils/rangeRandom.js";

/**
 * returns an array of colors with evenly changed chroma except the first one
 * @param {number} step step between iterations, by default is in [0 : 1/color.length]
 * @param {Color} colors array of colors
 * @returns {Color[]}
 */
export default function mapChroma(colors: Color[], step?: number): Color[] {

    if (step === undefined) {
        step = (1 / colors.length) * rangeRandom(.4, .7)
    }
    let iterations = 0 // this number is used to "reverse" the loop
    const sign = Math.random() > .5 ? 1 : -1

    for (let i = 1; i < colors.length; i++) {
        let color = colors[i]

        if (iterations > 0) {
            color.shiftC(sign * step * (i - iterations + 1))
            continue
        }

        const expectedChroma = color.C - sign * step * i
        if (sign === 1 && expectedChroma < 0.1 || sign === -1 && expectedChroma > .9) {
            iterations = i
            color.shiftC(sign * step)
            continue
        }
        if (iterations === 0) color.shiftC(-sign * step * i)
    }
    return colors
}