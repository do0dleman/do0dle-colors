/**
 * Converts angle value in a css string to degrees
 * @param {string} angleValueStr string that represents angle numeric value in cssString
 * @param {string} cssString css String that contains angle value
 * @returns {number} angle value in degrees
 */
export default function parseCssAngleToDeg(angleValueStr: string, cssString: string): number {

    const degEndPos = cssString.indexOf(angleValueStr) + angleValueStr.length
    let deg = +angleValueStr

    if (cssString.slice(degEndPos, degEndPos + 4) === 'turn') deg *= 360
    if (cssString.slice(degEndPos, degEndPos + 3) === 'rad') deg *= (180 / Math.PI)
    if (cssString.slice(degEndPos, degEndPos + 4) === 'grad') deg *= (360 / 400)

    return deg
}