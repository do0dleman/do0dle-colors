import Color from "../color/color";

/**
 * Generates triadic colors
 * @param {Color} seedColor color that is used to generate triadic colors
 * @param {number} colorAmount amount of generated triadic colors 
 * @returns {Color[]} array of generated colors
 */
export default function generateTriadColors(seedColor: Color, colorAmount: number): Color[] {
    const colors: Color[] = [new Color(seedColor)]

    for (let i = 1; i < colorAmount; i++) {
        let color = new Color(colors[i - 1])

        color.shiftH(120)
        colors.push(color)
    }

    return colors
}