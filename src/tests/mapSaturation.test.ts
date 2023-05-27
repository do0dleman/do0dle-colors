import Color from "../color/color"
import mapSaturation from "../postGenFunctions/mapSaturation"

test('1st color is not changed', () => {
    let colors = new Color([180, 76, 36], 'hsl').getAnalogous(10)
    colors = mapSaturation(colors)
    expect(colors[0].getHslArray()).toStrictEqual([180, 76, 36])
})