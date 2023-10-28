import okLCh from "../../types/okLChType.js";
import getCssNums from "./getCssNums.js";
import parseCssAngleToDeg from "./parseCssAngleToDeg.js";

/**
 * Parses css OkLCh string into OkLCh value with hue in degrees and C, L in range [0; 1]
 * @param {string} cssOkLCh css okLCh string  
 * @returns {okLCh} hsl value represented by an array
 */
export default function cssOkLChToOkLch(cssOkLCh: string): okLCh {

    const numsOkLCh = getCssNums(cssOkLCh)

    let L = +numsOkLCh[0]
    if (cssOkLCh[cssOkLCh.indexOf(numsOkLCh[0]) + numsOkLCh[0].length] === '%')
        L /= 100

    let C = +numsOkLCh[1]
    if (cssOkLCh[cssOkLCh.indexOf(numsOkLCh[1]) + numsOkLCh[1].length] === '%')
        C /= 100

    const hue = parseCssAngleToDeg(numsOkLCh[2], cssOkLCh)

    return [L, C, hue]

}