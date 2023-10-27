import rgb from "../../types/rgbType";

/**
 * Gamma corrects linear normalized rgb to an sRGB
 * @param {rgb} linearRGB linear normalized RGB value 
 * @returns {rgb} gamma corrected sRGB
 */
export default function linearToSRGB(linearRGB: rgb): rgb {
    return linearRGB.map(c =>
        c <= 0.0031308 ? c * 12.92 :
            1.055 * Math.pow(c, 1 / 2.4) - 0.055
    ) as rgb
}