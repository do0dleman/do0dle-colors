import Color from "./color/color";
import genMethodMap from "./genMethodMap";
import mapLightness from "./postGenFunctions/mapLightness";
import mapSaturation from "./postGenFunctions/mapSaturation";
import sortByHue from "./sortFunctions/sortByHue";
import sortBySaturation from "./sortFunctions/sortBySat";
import genMethod from "./types/genMethod";

export default function generateColors(color: Color, colorAmount: number, method?: genMethod) {

    if (method === undefined) method = getRandomMethod()
    let genFunction = genMethodMap.get(method)!

    let colors = genFunction(color, colorAmount)

    if (method != 'monochromatic') colors = mapSaturation(colors)
    colors = mapLightness(colors)

    if (method != 'monochromatic') colors = sortByHue(colors)
    if (method == 'monochromatic') colors = sortBySaturation(colors)

    return colors

    function getRandomMethod(): genMethod {
        const methods = Array.from(genMethodMap.keys())

        return methods[Math.floor(Math.random() * methods.length)]
    }
}