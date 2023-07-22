import { Color } from "../color/color";
import ndRand from "../randomFuntions/ndRand";
import round from "../utils/round";

/**
 * returns an array of colors with changed lightness except the first 
 * one according to normal distribution
 * @param {Color} colors array of colors
 * @returns {Color[]}
 */
export default function mapLightness(colors: Color[]): Color[] {

    const initialL = colors[0].l
    const sigma = Math.random() / 1.8 + 0.7

    return colors.map((color, index) => {

        if (index == 0) return color

        color.l = round(ndRand(initialL, sigma))
        return color
    })
}