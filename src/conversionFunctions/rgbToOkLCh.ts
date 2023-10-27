import okLCh from "../types/okLChType.js";
import rgb from "../types/rgbType.js";
import rgbToOkLab from "./rgbToOkLab.js";

/**
 * Converts rgb color to okLCh color
 * @param {rgb} rgb rgb color value represented by an array 
 * @returns {okLCh} LCh color value represented by an array
 */
export default function rgbToOkLCh(rgb: rgb, isNormalized?: boolean): okLCh {
    let normalizedRgb = isNormalized ? rgb : rgb.map(val => val / 255)

    const okLab = rgbToOkLab(normalizedRgb as rgb)

    const hue = Math.atan2(okLab[2], okLab[1]) * 360 / Math.PI / 2
    const C = Math.sqrt(okLab[1] ** 2 + okLab[2] ** 2)

    return [okLab[0], C, hue]
}