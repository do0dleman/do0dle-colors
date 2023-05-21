import hsl from "../../types/hslType";
import rgb from "../../types/rgbType";


export default function hslToRgb(hsl: hsl): rgb {

    let [H, S, L] = hsl
    if (H >= 360) H = H % 360

    const C = (1 - Math.abs(2 * L - 1)) * S
    const X = C * (1 - Math.abs(H / 60 % 2 - 1))

    const m = L - C / 2

    let R = 0, G = 0, B = 0
    if (H >= 0 && H < 60) {
        R = C
        G = X
    }
    if (H >= 60 && H < 120) {
        R = X
        G = C
    }
    if (H >= 120 && H < 180) {
        G = C
        B = X
    }
    if (H >= 180 && H < 240) {
        G = X
        B = C
    }
    if (H >= 240 && H < 300) {
        R = X
        B = C
    }
    if (H >= 300 && H < 360) {
        R = C
        B = X
    }

    return [
        Math.round((R + m) * 255),
        Math.round((G + m) * 255),
        Math.round((B + m) * 255)]
}