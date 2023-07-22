import { Color } from "../color/color";
import mapLightness from "../postGenFunctions/mapLightness"

test('1st color is not changed', () => {
    let colors = new Color([180, 76, 36], 'hsl').getAnalogous(10)
    colors = mapLightness(colors)
    expect(colors[0].getHslArray()).toStrictEqual([180, 76, 36])
})