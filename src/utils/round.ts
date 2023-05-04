/**
 * Rounds number
 * @param {number} number number to be rounded
 * @returns {number} rounded number
 */

export default function round(number: number): number {
    return Math.round(number * 1000) / 1000
}