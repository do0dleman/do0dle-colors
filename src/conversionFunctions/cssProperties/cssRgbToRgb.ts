import round from "../../utils/round.js"
import getCssNum from "./getCssNums.js"

/**
 * parses rgb css property to a normalized rgb array
 * @param {string} cssRgb rgb css property
 * @returns {[number, number, number]} normalized rgb array
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