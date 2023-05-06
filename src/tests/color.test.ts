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
test('color constructor', () => {
    const color = new Color('#f1b0ae')
    const color2 = new Color(color)
    expect(color.h).toBe(color2.h)
    expect(color.s).toBe(color2.s)
    expect(color.l).toBe(color2.l)
})
test('getHslArray test', () => {
    const color = new Color([1, 1, 1], 'hsl')
    const arr = color.getHslArray()
    expect(color.h).toBe(arr[0])
    expect(color.s).toBe(arr[1])
    expect(color.l).toBe(arr[2])
})
test('shiftH test', () => {
    const color = new Color([1, 1, 1], 'hsl')
    color.shiftH(10)
    expect(color.h).toBe(11)
    expect(color.s).toBe(1)
    expect(color.l).toBe(1)
})
test('shiftS test', () => {
    const color = new Color([1, 1, 1], 'hsl')
    color.shiftS(-.2)
    expect(color.h).toBe(1)
    expect(color.s).toBe(1 - .2)
    expect(color.l).toBe(1)
})
test('shiftL test', () => {
    const color = new Color([1, 1, 1], 'hsl')
    color.shiftL(-.2)
    expect(color.h).toBe(color.h)
    expect(color.s).toBe(color.s)
    expect(color.l).toBe(1 - .2)
})
test('getCssHsl test', () => {
    const color = new Color([1, 1, 1], 'hsl')
    expect(color.getCssHsl()).toBe('hsl(1deg, 100%, 100%)')
})