import Color from "../color/color"
import generateSplitComplementaryColors from "../genFunctions/generateSplitCompColors"

test('5 colors, 2 splitted', () => {
    const color = new Color([180, 100, 50], 'hsl')
    expect(generateSplitComplementaryColors(color, 5, 10, 2)).toStrictEqual([
        new Color([180, 100, 50], 'hsl'),
        new Color([340, 100, 50], 'hsl'),
        new Color([350, 100, 50], 'hsl'),
        new Color([10, 100, 50], 'hsl'),
        new Color([20, 100, 50], 'hsl'),
    ])
})
test('5 colors, 1 splitted', () => {
    const color = new Color([180, 100, 50], 'hsl')
    expect(generateSplitComplementaryColors(color, 5, 10, 1)).toStrictEqual([
        new Color([180, 100, 50], 'hsl'),
        new Color([350, 100, 50], 'hsl'),
        new Color([10, 100, 50], 'hsl'),
        new Color([180, 100, 50], 'hsl'),
        new Color([350, 100, 50], 'hsl'),
    ])
})