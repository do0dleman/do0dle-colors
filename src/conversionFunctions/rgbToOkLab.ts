import okLab from "../types/okLabType.js";
import rgb from "../types/rgbType.js";
import sRGBtoLinear from "./gammaCorrection/sRGBtoLinear.js";

/**
 * Converts rgb color to okLab color
 * @param {rgb} rgb rgb color value represented by an array
 * @returns {okLab} okLab color value represented by an array
 */
export default function rgbToOkLab(rgb: rgb): okLab {
    rgb = sRGBtoLinear(rgb) as rgb

    const l = 0.4122214708 * rgb[0] + 0.5363325363 * rgb[1] + 0.0514459929 * rgb[2];
    const m = 0.2119034982 * rgb[0] + 0.6806995451 * rgb[1] + 0.1073969566 * rgb[2];
    const s = 0.0883024619 * rgb[0] + 0.2817188376 * rgb[1] + 0.6299787005 * rgb[2];

    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);


    return [
        0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
        1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
        0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    ];
}