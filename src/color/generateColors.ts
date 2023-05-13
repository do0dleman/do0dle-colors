import Color from "./color";
import genMethodMap from "./genMethodMap";
import mapLightness from "../postGenFunctions/mapLightness";
import mapSaturation from "../postGenFunctions/mapSaturation";
import sortByHue from "../sortFunctions/sortByHue";
import sortBySaturation from "../sortFunctions/sortBySat";
import genMethod from "../types/genMethod";
import sortByLightness from "../sortFunctions/sortByLight";

/**
 * Generates color scheme based on seed color
 * @param {Color} color seed color of color scheme
 * @param {number} colorAmount amount of colors to be generated 
 * @param {genMethod} [method] method of color scheme generation
 * @returns {Color[]} color scheme
 */
export default function generateColors(color: Color, colorAmount: number, method?: genMethod): Color[] {

    if (method === undefined) method = getRandomMethod()
    let genFunction = genMethodMap.get(method)!

    let colors = genFunction(color, colorAmount)

    if (method != 'monochromatic') colors = mapSaturation(colors)
    colors = mapLightness(colors)

    if (method != 'monochromatic') colors = sortByHue(colors)
    if (method == 'monochromatic') colors = sortByLightness(colors)

    return colors

    function getRandomMethod(): genMethod {
        const methods = Array.from(genMethodMap.keys())

        return methods[Math.floor(Math.random() * methods.length)]
    }
}