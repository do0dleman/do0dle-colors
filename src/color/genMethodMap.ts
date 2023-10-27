import generateAnalogousColors from "../genFunctions/generateAnalogousColors.js"
import generateColorShades from "../genFunctions/generateColorShades.js"
import generateComplimentaryColors from "../genFunctions/generateCompColors.js"
import generateQuadraticColors from "../genFunctions/generateQuadColors.js"
import generateSplitComplementaryColors from "../genFunctions/generateSplitCompColors.js"
import generateTetraidicColors from "../genFunctions/generateTetrColors.js"
import generateTriadColors from "../genFunctions/generateTriadColors.js"
import genMethod from "../types/genMethod.js"

const genMethodMap = new Map<genMethod, Function>(
    [
        ['monochromatic', generateColorShades],
        ['analogous', generateAnalogousColors],
        ['triadic', generateTriadColors],
        ['tetraidic', generateTetraidicColors],
        ['quadratic', generateQuadraticColors],
        ['complimentary', generateComplimentaryColors],
        ['split complimentary', generateSplitComplementaryColors],
    ]
)

export default genMethodMap