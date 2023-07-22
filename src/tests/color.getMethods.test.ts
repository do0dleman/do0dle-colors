import { Color } from "../color/color";
import generateAnalogousColors from "../genFunctions/generateAnalogousColors";
import generateColorShades from "../genFunctions/generateColorShades";
import generateComplimentaryColors from "../genFunctions/generateCompColors";
import generateQuadraticColors from "../genFunctions/generateQuadColors";
import generateSplitComplementaryColors from "../genFunctions/generateSplitCompColors";
import generateTetraidicColors from "../genFunctions/generateTetrColors";
import generateTriadColors from "../genFunctions/generateTriadColors";

test('test getShades', () => {
    const color = new Color([180, 100, 50])
    expect(color.getShades(5, 5)).toStrictEqual(generateColorShades(color, 5, 5))
})
test('test getAnalogous', () => {
    const color = new Color([180, 100, 50])
    expect(color.getAnalogous(5, 10)).toStrictEqual(generateAnalogousColors(color, 5, 10))
})
test('test getComplementary', () => {
    const color = new Color([180, 100, 50])
    expect(color.getComplementary(5)).toStrictEqual(generateComplimentaryColors(color, 5))
})
test('test getQuadratic', () => {
    const color = new Color([180, 100, 50])
    expect(color.getQuadratic(5)).toStrictEqual(generateQuadraticColors(color, 5))
})
test('test getSplitComplementary', () => {
    const color = new Color([180, 100, 50])
    expect(color.getSplitComplementary(5, 10, 2)).toStrictEqual(generateSplitComplementaryColors(color, 5, 10, 2))
})
test('test getTetraidic', () => {
    const color = new Color([180, 100, 50])
    expect(color.getTetraidic(5, 2)).toStrictEqual(generateTetraidicColors(color, 5, 2))
})
test('test getTriadic', () => {
    const color = new Color([180, 100, 50])
    expect(color.getTriadic(5)).toStrictEqual(generateTriadColors(color, 5))
})