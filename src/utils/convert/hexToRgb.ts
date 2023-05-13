import hex from "../../types/hexType";
import rgb from "../../types/rgbType";
/**
 * Converts hex color to rgb color
 * @param {hex} hex hex value represented by a string 
 * @returns {rgb}   rgb value represented by an array
 */

export default function hexToRgb(hex: hex): rgb {
    let hexRgb: string[]
    if (hex.length === 4) {
        hexRgb = hex
            .slice(1)
            .match(/.{1}/g)!
            .map(item => item.repeat(2))
    }
    if (hex.length !== 4) {
        hexRgb = hex
            .slice(1)
            .match(/.{1,2}/g)!
    }

    const rgb: rgb = [
        parseInt(hexRgb![0], 16),
        parseInt(hexRgb![1], 16),
        parseInt(hexRgb![2], 16),
    ]

    return rgb
}