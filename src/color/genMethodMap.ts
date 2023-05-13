import generateAnalogousColors from "../genFunctions/generateAnalogousColors"
import generateColorShades from "../genFunctions/generateColorShades"
import generateComplimentaryColors from "../genFunctions/generateCompColors"
import generateQuadraticColors from "../genFunctions/generateQuadColors"
import generateSplitComplementaryColors from "../genFunctions/generateSplitCompColors"
import generateTetraidicColors from "../genFunctions/generateTetrColors"
import generateTriadColors from "../genFunctions/generateTriadColors"
import genMethod from "../types/genMethod"

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