import Color from "../color/color";
import generateTetraidicColors from "../genFunctions/generateTetrColors";

test('test aspect ratio 1', () => {
    expect(generateTetraidicColors(new Color([60, 100, 54]), 5, 1))
        .toStrictEqual([
            new Color([60, 100, 54]),
            new Color([150, 100, 54]),
            new Color([240, 100, 54]),
            new Color([330, 100, 54]),
            new Color([60, 100, 54]),
        ])
})