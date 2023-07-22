import { Color } from "../color/color";
import generateColorShades from "../genFunctions/generateColorShades";

test('color shades l always > 0', () => {
    const color = new Color([0.5, 1, 1], 'hsl', true)
    const colors = generateColorShades(color, 5, .1)
    expect(colors).toStrictEqual([
        new Color([0.5, 1, .6], 'hsl', true),
        new Color([0.5, 1, .7], 'hsl', true),
        new Color([0.5, 1, .8], 'hsl', true),
        new Color([0.5, 1, .9], 'hsl', true),
        new Color([0.5, 1, 1], 'hsl', true),
    ])
})
test('color shades l < 0', () => {
    const color = new Color([0.5, 1, .3], 'hsl', true)
    const colors = generateColorShades(color, 5, .1)
    expect(colors).toStrictEqual([
        new Color([0.5, 1, -0], 'hsl', true),
        new Color([0.5, 1, .1], 'hsl', true),
        new Color([0.5, 1, .2], 'hsl', true),
        new Color([0.5, 1, .3], 'hsl', true),
        new Color([0.5, 1, .4], 'hsl', true),
    ])
})
test('color shades l > 1', () => {
    const color = new Color([0.5, 1, .7], 'hsl', true)
    const colors = generateColorShades(color, 5, -.1)
    expect(colors).toStrictEqual([
        new Color([0.5, 1, .1], 'hsl', true),
        new Color([0.5, 1, .7], 'hsl', true),
        new Color([0.5, 1, .8], 'hsl', true),
        new Color([0.5, 1, .9], 'hsl', true),
        new Color([0.5, 1, 1], 'hsl', true),
    ])
})