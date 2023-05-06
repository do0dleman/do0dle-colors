import Color from "../color/color"
import mapSaturation from "../postGenFunctions/mapSaturation"
import round from "../utils/round"

/**
 * Generates analogous colors
 * @param {Color} seedColor color that is used to generate analogous colors 
 * @param {number} colorAmount amount of generated analogous colors 
 * @param {number} [step] hue value step     
 * @returns {Color[]} array of generated colors
 */
export default function generateAnalogousColors(seedColor: Color, colorAmount: number, step?: number) {

    let colors: Color[] = [seedColor]
    if (step == undefined) step = round((360 / colorAmount) * Math.random())

    for (let i = 1; i < colorAmount; i++) {
        let color = new Color(colors[i - 1])

        if (i % 2 == 0) {
            color.shiftH(step * i)
        }
        if (i % 2 != 0) {
            color.shiftH(-step * i)
        }

        colors.push(color)
    }

    return colors
}