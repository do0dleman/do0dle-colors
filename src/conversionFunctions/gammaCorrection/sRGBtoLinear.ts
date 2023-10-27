import rgb from "../../types/rgbType";

/**
 * Coverts gamma corrected sRGB to a linear RGB
 * @param {rgb} sRGB Normalized gamma corrected sRGB value 
 * @returns {rgb} linear RGB
 */
export default function sRGBtoLinear(sRGB: rgb): rgb {
    return sRGB.map(c =>
        c <= 0.04045 ? c / 12.92 :
            Math.pow((c + 0.055) / 1.055, 2.4)
    ) as rgb
}