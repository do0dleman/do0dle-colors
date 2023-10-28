/**
 * Generates random number in a given range
 * @param {number} min  
 * @param {number} max 
 */
export default function rangeRandom(min: number, max: number) {
    return Math.random() * (max - min) + min
}