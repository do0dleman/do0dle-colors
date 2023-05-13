import rgbToHsl from "../utils/convert/rgbToHsl"

test('rgb to hsl', () => {
    expect(rgbToHsl([255, 255, 255])).toStrictEqual([0, 0, 1])
    expect(rgbToHsl([213, 174, 92])).toStrictEqual([41, 0.59, 0.598])
    expect(rgbToHsl([15, 179, 61])).toStrictEqual([137, 0.846, 0.38])
    expect(rgbToHsl([20, 211, 110])).toStrictEqual([148, 0.827, 0.453])
    expect(rgbToHsl([189, 211, 17])).toStrictEqual([67, 0.851, 0.447])
    expect(rgbToHsl([92, 201, 24])).toStrictEqual([97, 0.787, 0.441])
    expect(rgbToHsl([166, 123, 244])).toStrictEqual([261, 0.847, 0.72])
    expect(rgbToHsl([210, 123, 185])).toStrictEqual([317, 0.492, 0.653])
})