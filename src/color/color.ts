import genMethod from "../types/genMethod"
import hex from "../types/hexType"
import hsl from "../types/hslType"
import cssHslToHsl from "../utils/convert/cssHslToHsl"
import cssRgbToRgb from "../utils/convert/cssRgbToRgb"
import hexToRgb from "../utils/convert/hexToRgb"
import rgbToHsl from "../utils/convert/rgbToHsl"
import round from "../utils/round"
import generateColors from "./generateColors"

type ColorTypes = 'rgb' | 'hsl'

/** A representation of color */
export default class Color {
    h: number = 0
    s: number = 0
    l: number = 0
    /**
     * Create a color instance
     * @param {[number, number, number]} color array representing a color
     * @param {ColorTypes} [colorType=hsl] color array type, default = hsl
     * @param {boolean} [isNormalized=false] specifies is array normalized, default = false
     */
    constructor(color: [number, number, number], colorType?: ColorTypes, isNormalized?: boolean)
    /**
     * Create a color iunstance from css rgb / hsl string
     * @param color css rgb / hsl color string
     */
    constructor(color: string)
    /**
     * Create a color instance from hex string
     * @param {hex} color hex string
     */
    constructor(color: hex)
    /**
     * Create a color instance from another color instance
     * @param {Color} color instance of Color
     */
    constructor(color: Color)

    constructor(...args: any[]) {
        let [color, colorType, isNormalized] = args

        if (isNormalized === undefined) isNormalized = false
        if (colorType === undefined) colorType = 'hsl'

        if (!Array.isArray(color) && typeof color == 'object') colorType = 'color'

        if (typeof color === 'string') colorType = 'cssString'
        if (color[0] === '#') colorType = 'hex'

        if (colorType === 'cssString') {
            const name = color.slice(0, 3)
            if (name === 'rgb') {
                const rgb = cssRgbToRgb(color)
                const hsl = rgbToHsl(rgb, true)
                this.h = hsl[0]
                this.s = hsl[1]
                this.l = hsl[2]
            }
            if (name === 'hsl') {
                const hsl = cssHslToHsl(color)
                this.h = hsl[0]
                this.s = hsl[1]
                this.l = hsl[2]
            }
        }
        if (colorType === 'hex') {
            const hsl = rgbToHsl(hexToRgb(color))
            this.h = hsl[0]
            this.s = hsl[1]
            this.l = hsl[2]
        }
        if (colorType === 'rgb') {
            const hsl = rgbToHsl(color, isNormalized)
            this.h = hsl[0]
            this.s = hsl[1]
            this.l = hsl[2]
        }
        if (colorType === 'hsl') {
            if (isNormalized) {
                this.h = color[0] * 360
                this.s = color[1]
                this.l = color[2]
            }
            if (!isNormalized) {
                this.h = color[0]
                this.s = color[1] / 100
                this.l = color[2] / 100
            }
        }
        if (colorType === 'color') {
            this.h = color.h
            this.s = color.s
            this.l = color.l
        }
    }
    /**
     * Get the hsl array of color
     * @returns {hsl} returns hsl array
     */
    getHslArray(): hsl {
        const hslArray: hsl = [this.h, this.s * 100, this.l * 100]
        return hslArray
    }
    /**
     * Get the css hsl string
     * @returns {string} hsl string in css format
     */
    getCssHsl(): string {
        return `hsl(${Math.round(this.h)}deg ${Math.round(this.s * 100)}% ${Math.round(this.l * 100)}%)`
    }
    /**
     * Shifts hue value by a step value
     * @param step amount of adjustment to hue value
     */
    shiftH(step: number) {
        let hue = round((this.h + step) % 360)
        if (hue < 0) hue = hue + 360
        this.h = hue
    }
    /**
     * Shifts saturation value by a step value
     * @param step amount of adjustment to saturation value
     */
    shiftS(step: number) {
        this.s = round(this.s + step)
    }
    /**
    * Shifts lightness value by a step value
    * @param step amount of adjustment to lightness value
    */
    shiftL(step: number) {
        this.l = round(this.l + step)
    }
    /**
    * Generates color scheme based on color instance
    * @param {number} colorAmount amount of colors to be generated 
    * @param {genMethod} [method] method of color scheme generation
    * @returns {Color[]} color scheme
    */
    getColorScheme(colorAmount: number, method?: genMethod): Color[] {
        return generateColors(this, colorAmount, method)
    }
}