import okLCh from "../types/okLChType.js";
import rgb from "../types/rgbType.js";
import clamp from "../utils/clamp.js";
import isValidRGB from "../utils/isValidRGB.js";
import OkLChToRgbRough from "./OkLChToRgbRough.js";
import linearToSRGB from "./gammaCorrection/linearToSRGB.js";

export default function OkLChToRgb(okLCh: okLCh) {
    let rgb = OkLChToRgbRough(okLCh)

    if (!isValidRGB(rgb)) {
        let clamped = [okLCh[0], 0, okLCh[2]] as okLCh;
        if (isValidRGB(OkLChToRgbRough(clamped))) {
            // By this time we know chroma=0 is displayable and our current chroma is not.
            // Find the displayable chroma through the bisection method.
            let start = 0, end = okLCh[1], delta = 0.01;

            // Keep track of iterations to measure performance
            while (end - start > delta) {
                clamped[1] = start + (end - start) * 0.5;
                if (isValidRGB(OkLChToRgbRough(clamped))) start = clamped[1];
                else end = clamped[1];
            }
            rgb = OkLChToRgbRough(clamped);
        }
        rgb = rgb.map(c => clamp(c)) as rgb
    }
    rgb = linearToSRGB(rgb)
    rgb = rgb.map(c => Math.round(c * 255)) as rgb

    return rgb
}
