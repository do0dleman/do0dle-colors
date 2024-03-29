import { Color } from "../color/color.js";

/**
 * Generates split complementary colors
 * @param {Color} seedColor color that is used to generate split complementary colors
 * @param {number} colorAmount amount of generated split complementary colors
 * @param {number} [offset] offset between split complimentary colors
 * @param {number} [splitAmount] amount of splitted color
 * @returns {Color[]} array of generated colors
 */
export default function generateSplitComplementaryColors(
    seedColor: Color, colorAmount: number, offset?: number, splitAmount?: number): Color[] {
    const colors = [new Color(seedColor)]

    if (!splitAmount) splitAmount = Math.ceil(Math.random() * 2 + 1) // generates number from 1 to 3
    if (offset === undefined) offset = Math.random() * 90 / (splitAmount)
    if (offset === 0) splitAmount = 0

    const splitColorAmount = 1 + 2 * splitAmount // amount of color per one cycle 
    const medianValue = Math.ceil(splitColorAmount / 2) // median value between 1 and colorAmount

    for (let i = 1; i < colorAmount; i++) {
        const color = new Color(colors[i - 1])

        if (i % splitColorAmount == 1 ||
            i % splitColorAmount == 0) color.shiftH(180 - splitAmount * offset)
        if (i % splitColorAmount == medianValue) color.shiftH(2 * offset)

        if (i % splitColorAmount != 1 &&
            i % splitColorAmount != medianValue &&
            i % splitColorAmount != 0) color.shiftH(offset)

        colors.push(color)
    }
    return colors
}