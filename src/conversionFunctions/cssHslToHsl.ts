import getCssNums from "./getCssNums";

export default function cssHslToHsl(cssHsl: string) {

    const numHsl = getCssNums(cssHsl)
    console.log(numHsl)

    let hue = +numHsl[0]
    if (cssHsl.includes('turn')) hue = +numHsl[0] * 360

    return [hue, +numHsl[1] / 100, +numHsl[2] / 100]

}