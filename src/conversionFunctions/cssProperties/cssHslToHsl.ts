import hsl from "../../types/hslType.js";
import getCssNums from "./getCssNums.js";
import parseCssAngleToDeg from "./parseCssAngleToDeg.js";

/**
 * Parses css hsl string into hsl value with hue in degrees and s, l in range [0; 1]
 * @param {string} cssHsl css hsl string  
 * @returns {hsl} hsl value represented by an array
 */
export default function cssHslToHsl(cssHsl: string): hsl {

    const numHsl = getCssNums(cssHsl)

    const hue = parseCssAngleToDeg(numHsl[0], cssHsl)

    return [hue, +numHsl[1] / 100, +numHsl[2] / 100]

}