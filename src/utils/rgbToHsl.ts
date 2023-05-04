import hsl from "../types/hslType";
import rgb from "../types/rgbType";
import round from "./round";

/**
 * Converts rgb color to hsl color
 * @param {rgb} rgb rgb color value represented by an array 
 * @returns {hsl}   hsl color value represented by an array
 */
export default function rgbToHsl(rgb: rgb): hsl {
    const normalizedRgb = rgb.map(val => val / 255)
    const max = Math.max(...normalizedRgb)
    const min = Math.min(...normalizedRgb)

    const l = Math.min(round(0.5 * (max + min)), 1)

    let hue = 0
    const [r, g, b] = normalizedRgb
    if (r > g && g >= b) hue = 60 * ((g - b) / (r - b))
    if (g > r && r >= b) hue = 60 * (2 - (r - b) / (g - b))
    if (g >= b && b > r) hue = 60 * (2 + (b - r) / (g - r))
    if (b > g && g > r) hue = 60 * (4 - (g - r) / (b - r))
    if (b > r && r >= g) hue = 60 * (4 + (r - g) / (b - g))
    if (r >= b && b > g) hue = 60 * (6 - (b - g) / (r - g))
    hue = Math.round(hue)

    let s = (max - min) / (1 - Math.abs(2 * l - 1))
    s = Math.min(round(s), 1)
    if (l === 1) s = 0

    return [hue, s, l]
}