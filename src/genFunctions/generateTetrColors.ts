import Color from "../color/color";
import round from "../utils/round";

/**
 * Generates tetraidic colors
 * @param {Color} seedColor color that is used to generate tetraidic colors
 * @param {number} colorAmount amount of generated tetraidic colors 
 * @param {number} [ascpectRatio] ratio between sides in [0; 1]
 * @returns {Color[]} array of generated colors
 */
export default function generateTetraidicColors(seedColor: Color, colorAmount: number, ascpectRatio?: number) {
    const colors = [seedColor]

    if (!ascpectRatio) ascpectRatio = round(Math.random())
    const shiftH1 = round(180 / (ascpectRatio + 1))
    const shiftH2 = round(180 - shiftH1)

    for (let i = 1; i < colorAmount; i++) {
        const color = new Color(colors[i - 1])

        if (i % 2 == 1) color.shiftH(shiftH1)
        if (i % 2 == 0) color.shiftH(shiftH2)
        colors.push(color)
    }

    return colors
}