import { Color } from "../color/color";
import generateTriadColors from "../genFunctions/generateTriadColors";

test('4 triadic colors', () => {
    expect(generateTriadColors(new Color([30, 56, 23]), 4))
        .toStrictEqual([
            new Color([30, 56, 23]),
            new Color([150, 56, 23]),
            new Color([270, 56, 23]),
            new Color([30, 56, 23]),
        ])
})