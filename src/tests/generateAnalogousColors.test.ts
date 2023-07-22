import { Color } from "../color/color";
import generateAnalogousColors from "../genFunctions/generateAnalogousColors";

test('five colors with step 10', () => {
    const color = new Color([180, 100, 100], 'hsl')
    const colors = generateAnalogousColors(color, 5, 10)
    expect(colors).toStrictEqual([
        new Color([180, 100, 100], 'hsl'),
        new Color([170, 100, 100], 'hsl'),
        new Color([190, 100, 100], 'hsl'),
        new Color([160, 100, 100], 'hsl'),
        new Color([200, 100, 100], 'hsl'),
    ])
})