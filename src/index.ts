import Color from "./color/color";
import generateColorShades from "./genFunctions/generateColorShades";
import rgbToHsl from "./utils/rgbToHsl";

// console.log(new Color('#ffffff'))
const color = new Color('#fe3107')
const shades = generateColorShades(color, 10)
console.log(shades)