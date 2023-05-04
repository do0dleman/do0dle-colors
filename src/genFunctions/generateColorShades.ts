import Color from "../color/color";

/**
 * Generates color shades based on seedColor.
 * @param {Color} seedColor color that is used to generate shades
 * @param {number} colorAmount amount of generated color shades
 * @param {number} [step] lightnes value step
 * @returns {Color[]} array of generated color shades
 */

export default function generateColorShades(seedColor: Color, colorAmount: number, step?: number): Color[] {
    const colors: Color[] = []
    const seedHslArray = seedColor.getHslArray()
    if (step === undefined) step = (1 / colorAmount) * Math.random()

    let iterations = 0
    for (let i = 0; i < colorAmount; i++) {

        let color = new Color(seedHslArray)
        if (iterations === 0) color.shiftL(-step * i)
        if (iterations > 0) color.shiftL(step * (i - iterations + 1))

        if (color.l < 0) {
            color = new Color(seedHslArray)
            iterations = i
            color.shiftL(step)
        }

        if (color.l > 1) {
            color.shiftL(-Math.floor(color.l))
        }

        colors.push(color)
    }

    colors.sort((a, b) => a.l - b.l)
    return colors
}