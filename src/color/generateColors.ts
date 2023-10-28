import { Color } from "../color/color.js";
import genMethodMap from "./genMethodMap.js";
import mapLightness from "../postGenFunctions/mapLightness.js";
import sortByHue from "../sortFunctions/sortByHue.js";
import genMethod from "../types/genMethod.js";
import sortByLightness from "../sortFunctions/sortByLight.js";
import mapChroma from "../postGenFunctions/mapChroma.js";

/**
 * Generates color scheme based on seed color
 * @param {Color} color seed color of color scheme
 * @param {number} colorAmount amount of colors to be generated 
 * @param {genMethod} [method] method of color scheme generation
 * @returns {Color[]} color scheme
 */
export default function generateColors(color: Color, colorAmount: number, method?: genMethod): Color[] {

    if (method === undefined || method === 'random') method = getRandomMethod()
    let genFunction = genMethodMap.get(method)!

    let colors = genFunction(color, colorAmount)

    if (method != 'monochromatic') {
        if (Math.random() > 0.5) {
            colors = mapChroma(colors)
        } else {
            colors = mapLightness(colors)
        }
        // colors = mapChroma(colors)
        // colors = mapLightness(colors)
    }

    if (method != 'monochromatic') colors = sortByHue(colors)
    if (method == 'monochromatic') colors = sortByLightness(colors)

    return colors

    function getRandomMethod(): genMethod {
        const methods = Array.from(genMethodMap.keys())

        return methods[Math.floor(Math.random() * methods.length)]
    }
}