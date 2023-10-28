import generateAnalogousColors from "../genFunctions/generateAnalogousColors.js"
import generateColorShades from "../genFunctions/generateColorShades.js"
import generateComplimentaryColors from "../genFunctions/generateCompColors.js"
import generateQuadraticColors from "../genFunctions/generateQuadColors.js"
import generateSplitComplementaryColors from "../genFunctions/generateSplitCompColors.js"
import generateTetraidicColors from "../genFunctions/generateTetrColors.js"
import generateTriadColors from "../genFunctions/generateTriadColors.js"
import genMethod from "../types/genMethod.js"
import hex from "../types/hexType.js"
import hsl from "../types/hslType.js"
import rgb from "../types/rgbType.js"
import cssHslToHsl from "../conversionFunctions/cssProperties/cssHslToHsl.js"
import cssRgbToRgb from "../conversionFunctions/cssProperties/cssRgbToRgb.js"
import hexToRgb from "../conversionFunctions/hexToRgb.js"
import hslToRgb from "../conversionFunctions/hslToRgb.js"
import rgbToHex from "../conversionFunctions/rgbToHex.js"
import rgbToHsl from "../conversionFunctions/rgbToHsl.js"
import round from "../utils/round.js"
import generateColors from "./generateColors.js"
import rgbToOkLCh from "../conversionFunctions/rgbToOkLCh.js"
import OkLChToRgb from "../conversionFunctions/OkLChToRgb.js"
import okLCh from "../types/okLChType.js"
import cssOkLChToOkLch from "../conversionFunctions/cssProperties/cssOkLChtoOkLCh.js"

type ColorTypes = 'rgb' | 'hsl' | 'OkLCh'

/** A representation of color */
export default class Color {
    h: number = 0
    C: number = 0
    L: number = 0
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
        if (colorType === undefined) colorType = 'OkLCh'

        if (!Array.isArray(color) && typeof color == 'object') colorType = 'color'

        if (typeof color === 'string') colorType = 'cssString'
        if (color[0] === '#') colorType = 'hex'

        if (colorType === 'cssString') {
            const name = color.split('(')[0]
            if (name === 'rgb') {
                const rgb = cssRgbToRgb(color)
                const okLCh = rgbToOkLCh(rgb)
                this.L = okLCh[0]
                this.C = okLCh[1]
                this.h = okLCh[2]
            }
            if (name === 'hsl') {
                const hsl = cssHslToHsl(color)
                const rgb = hslToRgb(hsl as hsl)
                const okLCh = rgbToOkLCh(rgb)
                this.L = okLCh[0]
                this.C = okLCh[1]
                this.h = okLCh[2]
            }
            if (name === 'oklch') {
                const okLCh = cssOkLChToOkLch(color)
                this.L = okLCh[0]
                this.C = okLCh[1]
                this.h = okLCh[2]
            }
        }
        if (colorType === 'hex') {
            const okLCh = rgbToOkLCh(hexToRgb(color))
            this.L = okLCh[0]
            this.C = okLCh[1]
            this.h = okLCh[2]
        }
        if (colorType === 'OkLCh') {
            this.L = color[0]
            this.C = color[1]
            this.h = color[2]
        }
        if (colorType === 'rgb') {
            const okLCh = rgbToOkLCh(color, isNormalized)
            this.L = okLCh[0]
            this.C = okLCh[1]
            this.h = okLCh[2]
        }
        if (colorType === 'hsl') {
            let hsl: hsl = [0, 0, 0]
            if (isNormalized) {
                hsl = [color[0] * 360, color[1], color[2]]
            }
            if (!isNormalized) {
                hsl = [color[0], color[1] / 100, color[2] / 100]
            }
            const rgb = hslToRgb(hsl)
            const okLCh = rgbToOkLCh(rgb, false)

            this.L = okLCh[0]
            this.C = okLCh[1]
            this.h = okLCh[2]
        }
        if (colorType === 'color') {
            this.L = color.L
            this.C = color.C
            this.h = color.h
        }
    }
    /**
     * Get the hsl array of a color
     * @returns {hsl} returns hsl array
     */
    getHslArray(): hsl {
        const rgb = OkLChToRgb([this.L, this.C, this.h])
        const hsl = rgbToHsl(rgb)
        const hslArray: hsl = [hsl[0], hsl[1] * 100, hsl[2] * 100]

        return hslArray
    }
    /**
     * Get the okLCh array of a color
     * @returns {okLCh} returns okLCh array
     */
    getOkLChArray(): hsl {
        const hslArray: hsl = [this.L, this.C, this.h]

        return hslArray
    }
    /**
     * Get the rgb array of a color
     * @returns {rgb} returns rgb array
     */
    getRgbArray(): rgb {
        const rgbArray: rgb = OkLChToRgb([this.L, this.C, this.h])
        return rgbArray
    }
    /**
     * Get the css hsl string of a color
     * @returns {string} hsl string in css format
     */
    getCssHsl(): string {
        const rgb = OkLChToRgb([this.L, this.C, this.h])
        const hsl = rgbToHsl(rgb)
        return `hsl(${Math.round(hsl[0])}deg ${Math.round(hsl[1] * 100)}% ${Math.round(hsl[2] * 100)}%)`
    }
    /**
     * Get the css rgb string of a color
     * @returns {string} rgb string in css format
     */
    getCssRgb(): string {
        const rgb = OkLChToRgb([this.L, this.C, this.h])
        return `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})`
    }
    /**
     * Get the hex string of a color
     * @returns {hex} hex string in
     */
    getCssHex(): hex {
        return rgbToHex(OkLChToRgb([this.L, this.C, this.h]))
    }
    /**
     * Get the hex string of a color
     * @returns {hex} hex string in
     */
    getCssOklch(): string {
        let hue = this.h
        if (hue < 0) hue += 360
        return `oklch(${Math.round(this.L * 100)}% ${Math.round(this.C * 100)}% ${Math.round(hue)})`
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
     * Shifts chroma value by a step value
     * @param step amount of adjustment to chroma value
     */
    shiftC(step: number) {
        this.C = round((this.C + step))
    }
    /**
    * Shifts lightness value by a step value
    * @param step amount of adjustment to lightness value
    */
    shiftL(step: number) {
        this.L = round((this.L + step))
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
    /**
    * Generates color shades based on seedColor.
    * @param {number} colorAmount amount of generated color shades
    * @param {number} [step] lightnes value step
    * @returns {Color[]} array of generated color shades
    */
    getShades(colorAmount: number, step?: number): Color[] {
        return generateColorShades(this, colorAmount, step)
    }
    /**
    * Generates analogous colors
    * @param {number} colorAmount amount of generated analogous colors 
    * @param {number} [step] hue value step     
    * @returns {Color[]} array of generated colors
    */
    getAnalogous(colorAmount: number, step?: number): Color[] {
        return generateAnalogousColors(this, colorAmount, step)
    }
    /**
    * Generates complementary colors
    * @param {number} colorAmount amount of generated complementary colors
    * @returns {Color[]} array of generated colors
    */
    getComplementary(colorAmount: number): Color[] {
        return generateComplimentaryColors(this, colorAmount)
    }
    /**
    * Generates split complementary colors
    * @param {number} colorAmount amount of generated split complementary colors
    * @param {number} [offset] offset between split complimentary colors
    * @param {number} [splitAmount] amount of splitted color
    * @returns {Color[]} array of generated colors
    */
    getSplitComplementary(colorAmount: number, offset?: number, splitAmount?: number): Color[] {
        return generateSplitComplementaryColors(this, colorAmount, offset, splitAmount)
    }
    /**
    * Generates quadratic colors
    * @param {number} colorAmount amount of generated quadratic colors 
    * @returns {Color[]} array of generated colors
    */
    getQuadratic(colorAmount: number): Color[] {
        return generateQuadraticColors(this, colorAmount)
    }
    /**
    * Generates tetraidic colors
    * @param {number} colorAmount amount of generated tetraidic colors 
    * @param {number} [ascpectRatio] ratio between sides in [0; 1]
    * @returns {Color[]} array of generated colors
    */
    getTetraidic(colorAmount: number, ascpectRatio?: number): Color[] {
        return generateTetraidicColors(this, colorAmount, ascpectRatio)
    }
    /**
    * Generates triadic colors
    * @param {number} colorAmount amount of generated triadic colors 
    * @returns {Color[]} array of generated colors
    */
    getTriadic(colorAmount: number): Color[] {
        return generateTriadColors(this, colorAmount)
    }
}

export { Color }