import round from "../round"
import getCssNum from "./getCssNums"

/**
 * parses rgb css property to a rgb array
 * @param {string} cssRgb rgb css property
 * @returns {[number, number, number]} rgb array
 */
export default function cssRgbToRgb(cssRgb: string): [number, number, number] {

    const numRgb = getCssNum(cssRgb)

    const isPercent = cssRgb.includes('%')
    let normalizedRgb: [number, number, number]
    if (isPercent) {
        normalizedRgb = numRgb.map(num => +num / 100) as [number, number, number]
    }
    if (!isPercent) {
        normalizedRgb = numRgb.map(num => round(+num / 255)) as [number, number, number]
    }

    return normalizedRgb!
}