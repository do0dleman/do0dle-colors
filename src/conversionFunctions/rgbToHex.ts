import hex from "../types/hexType.js";
import rgb from "../types/rgbType.js";

/**
 * Converts rgb color to hsl color
 * @param {rgb} rgb rgb color value represented by an array 
 * @returns {hsl} hsl color value represented by an array
 */
export default function rgbToHex(rgb: rgb, isNormalized?: boolean): hex {
    const nonNormalizedRGB = isNormalized ? rgb.map(i => i * 255) : rgb

    const hexRgb = nonNormalizedRGB.map(i => {
        return i.toString(16).padStart(2, '0')
    })

    return `#${hexRgb[0]}${hexRgb[1]}${hexRgb[2]}`
}