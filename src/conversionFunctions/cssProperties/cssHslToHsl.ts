import hsl from "../../types/hslType.js";
import getCssNums from "./getCssNums.js";

/**
 * Parses css hsl string into hsl value with hue in degrees and s, l in range [0; 1]
 * @param {string} cssHsl css hsl string  
 * @returns {hsl} hsl value represented by an array
 */
export default function cssHslToHsl(cssHsl: string): hsl {

    const numHsl = getCssNums(cssHsl)

    let hue = +numHsl[0]
    if (cssHsl.includes('turn')) hue = +numHsl[0] * 360

    return [hue, +numHsl[1] / 100, +numHsl[2] / 100]

}