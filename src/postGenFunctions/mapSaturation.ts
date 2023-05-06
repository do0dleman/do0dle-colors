import Color from "../color/color";
import ndRand from "../randomFuntions/ndRand"
import quadraticRand from "../randomFuntions/quadraticRand";
import reverseQuadraticRand from "../randomFuntions/reverseQuadraticRand";
import round from "../utils/round";

export default function mapSaturation(colors: Color[]): Color[] {
    const initialS = colors[0].s

    return colors.map((color, index) => {

        if (index == 1) return color

        color.s = round(ndRand(initialS))
        return color
    })
}