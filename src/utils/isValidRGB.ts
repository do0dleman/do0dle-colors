import rgb from "../types/rgbType.js";

export default function isValidRGB(rgb: rgb): boolean {
    let isValid = true
    rgb.forEach(c => {
        if (c < 0 || c > 1) {
            isValid = false
        }
    })

    return isValid
}