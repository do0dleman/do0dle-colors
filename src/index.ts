import { Color } from "./color/color.js";
import genMethods from "./color/genMethods.js";
import genMethod from "./types/genMethod.js";

let rgb = new Color([1, 3, 1], 'rgb', true).getCssRgb()
console.log(rgb)
export { Color, genMethods }
export type { genMethod }