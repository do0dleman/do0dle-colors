import { Color } from "../color/color";
import sortByLightness from "../sortFunctions/sortByLight";

test('test sort by lightness', () => {
    expect(sortByLightness([
        new Color([120, 64, 10]),
        new Color([120, 64, 65]),
        new Color([120, 64, 43]),
        new Color([120, 64, 76]),
        new Color([120, 64, 12]),
        new Color([120, 64, 89]),
    ])).toStrictEqual([
        new Color([120, 64, 10]),
        new Color([120, 64, 12]),
        new Color([120, 64, 43]),
        new Color([120, 64, 65]),
        new Color([120, 64, 76]),
        new Color([120, 64, 89]),
    ])
})