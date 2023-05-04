import hexToRgb from "../utils/hexToRgb"

test('6 char hex to rgb', () => {
    expect(hexToRgb('#ffffff')).toStrictEqual([255, 255, 255])
    expect(hexToRgb('#b012a7')).toStrictEqual([176, 18, 167])
})
test('3 char hex to rgb', () => {
    expect(hexToRgb('#fff')).toStrictEqual([255, 255, 255])
    expect(hexToRgb('#ba7')).toStrictEqual([187, 170, 119])
})