import hex from "../types/hexType"
import hexToRgb from "../utils/hexToRgb"
import rgbToHsl from "../utils/rgbToHsl"

type ColorTypes = 'rgb' | 'hsl'


export default class Color {
    h: number = 0
    s: number = 0
    l: number = 0

    constructor(color: [number, number, number], colorType?: ColorTypes)
    constructor(color: hex)

    constructor(...args: any[]) {
        let [color, colorType] = args

        if (colorType === undefined) colorType = 'hsl'

        if (color[0] === '#') colorType = 'hex'

        if (colorType === 'hex') {
            const hsl = rgbToHsl(hexToRgb(color))
            this.h = hsl[0]
            this.s = hsl[1]
            this.l = hsl[2]
        }
        if (colorType === 'hsl') {
            this.h = color[0]
            this.s = color[1]
            this.l = color[2]
        }
        if (colorType === 'rgb') {
            const hsl = rgbToHsl(color)
            this.h = hsl[0]
            this.s = hsl[1]
            this.l = hsl[2]
        }
    }
}