import Color from "../color/color";
import ndRand from "../randomFuntions/ndRand";


export default function mapLightness(colors: Color[]) {

    const initialL = colors[1].l

    return colors.map((color, index) => {

        if (index == 1) return color

        color.l = ndRand(initialL)
        return color
    })
}