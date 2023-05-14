import Color from "../color/color";
import sortByHue from "../sortFunctions/sortByHue";

test('test hue sort', () => {
    expect(sortByHue([
        new Color([107, 20, 70]),
        new Color([12, 20, 70]),
        new Color([98, 20, 70]),
        new Color([123, 20, 70]),
        new Color([74, 20, 70]),
        new Color([342, 20, 70]),
        new Color([278, 20, 70]),
    ])).toStrictEqual([
        new Color([278, 20, 70]),
        new Color([342, 20, 70]),
        new Color([12, 20, 70]),
        new Color([74, 20, 70]),
        new Color([98, 20, 70]),
        new Color([107, 20, 70]),
        new Color([123, 20, 70]),
    ])
})