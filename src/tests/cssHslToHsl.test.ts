import cssHslToHsl from '../utils/convert/cssHslToHsl'

test('test hsl with deg', () => {
    expect(cssHslToHsl('hsl(100deg 23% 100%')).toStrictEqual([100, .23, 1])
})

test('test hsl with turn', () => {
    expect(cssHslToHsl('hsl(0.2turn 23% 100%')).toStrictEqual([72, .23, 1])
})