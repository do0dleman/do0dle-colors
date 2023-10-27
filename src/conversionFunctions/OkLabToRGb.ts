import okLab from "../types/okLabType.js";
import rgb from "../types/rgbType.js";

/**
 * Converts okLab color to rgb color
 * @param {okLab} okLab okLab color value represented bu an array
 * @returns {rgb} rgb color value represented by an array 
 */
export default function okLabToRgb(okLab: okLab): rgb {
    const l_ = okLab[0] + 0.3963377774 * okLab[1] + 0.2158037573 * okLab[2];
    const m_ = okLab[0] - 0.1055613458 * okLab[1] - 0.0638541728 * okLab[2];
    const s_ = okLab[0] - 0.0894841775 * okLab[1] - 1.2914855480 * okLab[2];

    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;

    let rgb = [
        +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    ] as rgb

    return rgb
}