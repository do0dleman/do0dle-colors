import generateAnalogousColors from "./genFunctions/generateAnalogousColors";
import generateColorShades from "./genFunctions/generateColorShades";
import generateTriadColors from "./genFunctions/generateTriadColors";
import genMethod from "./types/genMethod";

const genMethodMap = new Map<genMethod, Function>(
    [
        ['monochromatic', generateColorShades],
        ['analogous', generateAnalogousColors],
        ['triadic', generateTriadColors],
    ]
)

export default genMethodMap