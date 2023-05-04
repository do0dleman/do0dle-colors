import Color from "../color/color"

test('hsl constructor', () => {
    const color = new Color([1, 1, 1], 'hsl')
    expect(color.h).toBe(1)
    expect(color.s).toBe(1)
    expect(color.l).toBe(1)
})
test('rgb constructor', () => {
    const color = new Color([88, 180, 255], 'rgb')
    expect(color.h).toBe(207)
    expect(color.s).toBe(1)
    expect(color.l).toBe(0.673)
})
test('hex constructor', () => {
    const color = new Color('#f1b0ae')
    expect(color.h).toBe(2)
    expect(color.s).toBe(0.706)
    expect(color.l).toBe(0.814)
})