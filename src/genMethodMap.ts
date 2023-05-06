import generateAnalogousColors from "./genFunctions/generateAnalogousColors";
import generateColorShades from "./genFunctions/generateColorShades";
import genMethod from "./types/genMethod";

const genMethodMap = new Map<genMethod, Function>(
    [
        ['monochromatic', generateColorShades],
        ['analogous', generateAnalogousColors],
        ['triadic', generateColorShades],
    ]
)

export default genMethodMap