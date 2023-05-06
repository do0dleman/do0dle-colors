import Color from "./color/color";
import generateAnalogousColors from "./genFunctions/generateAnalogousColors";
import mapLightness from "./postGenFunctions/mapLightness";
import mapSaturation from "./postGenFunctions/mapSaturation";
import sortByHue from "./sortFunctions/sortByHue";


export default function generateColors(color: Color, colorAmount: number, method?: string) {

    const genFunction = generateAnalogousColors

    let colors = genFunction(color, colorAmount)
    colors = mapSaturation(colors)
    colors = mapLightness(colors)

    colors = sortByHue(colors)

    return colors

}