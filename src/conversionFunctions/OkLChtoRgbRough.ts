import okLCh from "../types/okLChType.js";
import rgb from "../types/rgbType.js";
import okLabToRgb from "./OkLabToRGb.js";

/**
 * Converts okLCh color to rgb color
 * @param {okLCh} okLCh okLch color value represented by an array
 * @returns {rgb} rgb color value represented by an array 
 */
export default function OkLChToRgbRough(okLCh: okLCh): rgb {

    const a = okLCh[1] * Math.cos(okLCh[2] / 180 * Math.PI)
    const b = okLCh[1] * Math.sin(okLCh[2] / 180 * Math.PI)

    let rgb = okLabToRgb([okLCh[0], a, b])

    return rgb
}