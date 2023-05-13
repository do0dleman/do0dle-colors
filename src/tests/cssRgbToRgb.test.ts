import cssRgbToRgb from "../utils/convert/cssRgbToRgb";

test('comma test', () => {
    expect(cssRgbToRgb('rgb(100, 200, 123)')).toStrictEqual(cssRgbToRgb('rgb(100 200 123)'))
    expect(cssRgbToRgb('rgb(13%, 60%, 11%)')).toStrictEqual(cssRgbToRgb('rgb(13% 60% 11%)'))
    expect(cssRgbToRgb('rgb(255, 11, 231)')).toStrictEqual(cssRgbToRgb('rgb(255 11 231)'))
    expect(cssRgbToRgb('rgb(0%, 10%, 78%)')).toStrictEqual(cssRgbToRgb('rgb(0% 10% 78%)'))
})