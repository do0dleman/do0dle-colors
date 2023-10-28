import { Color } from "../color/color.js";
import rangeRandom from "../utils/rangeRandom.js";

/**
 * Generates color shades based on seedColor.
 * @param {Color} seedColor color that is used to generate shades
 * @param {number} colorAmount amount of generated color shades
 * @param {number} [step] lightnes value step
 * @returns {Color[]} array of generated color shades
 */

export default function generateColorShades(seedColor: Color, colorAmount: number, step?: number): Color[] {
    const colors: Color[] = []
    if (step === undefined) step = (1 / colorAmount) * rangeRandom(.4, .7)

    let iterations = 0  // this number is used to "reverse" the loop
    const sign = Math.random() > .5 ? 1 : -1
    for (let i = 0; i < colorAmount; i++) {

        let color = new Color(seedColor)
        if (iterations === 0) color.shiftL(-sign * step * i)
        if (iterations > 0) color.shiftL(sign * step * (i - iterations + 1))

        if (sign === 1 && color.L < 0 || sign === -1 && color.L > 1) {
            color = new Color(seedColor)
            iterations = i
            color.shiftL(sign * step)
        }

        colors.push(color)
    }

    colors.sort((a, b) => a.L - b.L)
    return colors
}