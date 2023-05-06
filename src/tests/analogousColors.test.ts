import Color from "../color/color";
import generateAnalogousColors from "../genFunctions/generateAnalogousColors";

test('color shades l always > 0', () => {
    const color = new Color([180, 1, 1], 'hsl')
    const colors = generateAnalogousColors(color, 5, .1)
    expect(colors).toStrictEqual([
        new Color([180, 1, .6], 'hsl'),
        new Color([180, 1, .7], 'hsl'),
        new Color([180, 1, .8], 'hsl'),
        new Color([180, 1, .9], 'hsl'),
        new Color([180, 1, 1], 'hsl'),
    ])
})
test('color shades l < 0', () => {
    const color = new Color([180, 1, .3], 'hsl')
    const colors = generateAnalogousColors(color, 5, .1)
    expect(colors).toStrictEqual([
        new Color([180, 1, -0], 'hsl'),
        new Color([180, 1, .1], 'hsl'),
        new Color([180, 1, .2], 'hsl'),
        new Color([180, 1, .3], 'hsl'),
        new Color([180, 1, .4], 'hsl'),
    ])
})
test('color shades l > 1', () => {
    const color = new Color([180, 1, .7], 'hsl')
    const colors = generateAnalogousColors(color, 5, -.1)
    expect(colors).toStrictEqual([
        new Color([180, 1, .1], 'hsl'),
        new Color([180, 1, .7], 'hsl'),
        new Color([180, 1, .8], 'hsl'),
        new Color([180, 1, .9], 'hsl'),
        new Color([180, 1, 1], 'hsl'),
    ])
})