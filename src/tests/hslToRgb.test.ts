import hslToRgb from "../utils/convert/hslToRgb"


test('test hsl black', () => {
    expect(hslToRgb([0, 0, 0])).toStrictEqual([0, 0, 0])
    expect(hslToRgb([72, 0, 0])).toStrictEqual([0, 0, 0])
})
test('test hsl white', () => {
    expect(hslToRgb([0, 0, 1])).toStrictEqual([255, 255, 255])
    expect(hslToRgb([321, 0, 1])).toStrictEqual([255, 255, 255])
})
test('test 100% sat hsl colors', () => {
    expect(hslToRgb([0, 1, .5])).toStrictEqual([255, 0, 0])
    expect(hslToRgb([120, 1, .5])).toStrictEqual([0, 255, 0])
    expect(hslToRgb([240, 1, .5])).toStrictEqual([0, 0, 255])
    expect(hslToRgb([60, 1, .5])).toStrictEqual([255, 255, 0])
    expect(hslToRgb([180, 1, .5])).toStrictEqual([0, 255, 255])
    expect(hslToRgb([360, 1, .5])).toStrictEqual([255, 0, 0])
})
test('varying sat hsl colors', () => {
    expect(hslToRgb([156, .32, .5])).toStrictEqual([87, 168, 136])
    expect(hslToRgb([98, .76, .5])).toStrictEqual([102, 224, 31])
    expect(hslToRgb([327, 0, .5])).toStrictEqual([128, 128, 128])
})
test('varying ligthness hsl colors', () => {
    expect(hslToRgb([37, 1, .76])).toStrictEqual([255, 208, 133])
    expect(hslToRgb([243, 1, .23])).toStrictEqual([6, 0, 117])
    expect(hslToRgb([84, 1, .47])).toStrictEqual([144, 240, 0])
})
test('varying sat and ligthness hsl colors', () => {
    expect(hslToRgb([87, .23, .76])).toStrictEqual([195, 208, 180])
    expect(hslToRgb([213, .65, .23])).toStrictEqual([21, 55, 97])
    expect(hslToRgb([129, .96, .57])).toStrictEqual([40, 251, 72])
    expect(hslToRgb([301, 0, .89])).toStrictEqual([227, 227, 227])
})