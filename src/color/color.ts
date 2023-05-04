import hex from "../types/hexType"
import hsl from "../types/hslType"
import hexToRgb from "../utils/hexToRgb"
import rgbToHsl from "../utils/rgbToHsl"
import round from "../utils/round"

type ColorTypes = 'rgb' | 'hsl'


export default class Color {
    h: number = 0
    s: number = 0
    l: number = 0

    constructor(color: [number, number, number], colorType?: ColorTypes)
    constructor(color: hex)
    constructor(color: Color)

    constructor(...args: any[]) {
        let [color, colorType] = args

        if (colorType === undefined) colorType = 'hsl'

        if (!Array.isArray(color) && typeof color == 'object') colorType = 'color'

        if (color[0] === '#') colorType = 'hex'

        if (colorType === 'hex') {
            const hsl = rgbToHsl(hexToRgb(color))
            this.h = hsl[0]
            this.s = hsl[1]
            this.l = hsl[2]
        }
        if (colorType === 'rgb') {
            const hsl = rgbToHsl(color)
            this.h = hsl[0]
            this.s = hsl[1]
            this.l = hsl[2]
        }
        if (colorType === 'hsl') {
            this.h = color[0]
            this.s = color[1]
            this.l = color[2]
        }
        if (colorType === 'color') {
            this.h = color.h
            this.s = color.s
            this.l = color.l
        }
    }
    getHslArray() {
        const hslArray: hsl = [this.h, this.s, this.l]
        return hslArray
    }
    getCssHsl() {
        return `hsl(${this.h}deg, ${this.s * 100}%, ${this.l * 100}%)`
    }
    shiftL(step: number) {
        this.l = round(this.l + step)
    }
}