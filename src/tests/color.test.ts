import Color from "../color/color"

test('hsl constructor', () => {
    const color = new Color([0.2, .7, .2], 'hsl', true)
    expect(color.h).toBe(72)
    expect(color.s).toBe(.7)
    expect(color.l).toBe(.2)
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
test('color constructor', () => {
    const color = new Color('#f1b0ae')
    const color2 = new Color(color)
    expect(color.h).toBe(color2.h)
    expect(color.s).toBe(color2.s)
    expect(color.l).toBe(color2.l)
})
test('getHslArray test', () => {
    const color = new Color([1, 1, 1], 'hsl', true)
    const arr = color.getHslArray()
    expect(color.h).toBe(arr[0])
    expect(color.s).toBe(arr[1])
    expect(color.l).toBe(arr[2])
})
test('shiftH test', () => {
    const color = new Color([1, 1, 1], 'hsl', true)
    color.shiftH(10)
    expect(color.h).toBe(10)
    expect(color.s).toBe(1)
    expect(color.l).toBe(1)
})
test('shiftS test', () => {
    const color = new Color([1, 1, 1], 'hsl', true)
    color.shiftS(-.2)
    expect(color.h).toBe(360)
    expect(color.s).toBe(1 - .2)
    expect(color.l).toBe(1)
})
test('shiftL test', () => {
    const color = new Color([1, 1, 1], 'hsl', true)
    color.shiftL(-.2)
    expect(color.h).toBe(color.h)
    expect(color.s).toBe(color.s)
    expect(color.l).toBe(1 - .2)
})
test('getCssHsl test', () => {
    expect(new Color([1, 1, 1], 'hsl', true).getCssHsl()).toBe('hsl(360deg, 100%, 100%)')
    expect(new Color([120, 50, 12], 'hsl').getCssHsl()).toBe('hsl(120deg, 50%, 12%)')
})