import Color from "../color/color"
import round from "../utils/round"


export default function generateAnalogousColors(seedColor: Color, colorAmount: number, step?: number) {

    const colors: Color[] = [seedColor]
    if (step == undefined) step = round((360 / colorAmount) * Math.random())

    for (let i = 1; i < colorAmount; i++) {
        let color = new Color(colors[i - 1])

        if (i % 2 == 0) {
            color.shiftH(step * i)
        }
        if (i % 2 != 0) {
            color.shiftH(-step * i)
        }

        colors.push(color)
    }

    colors.sort((a, b) => {
        let h1 = a.h
        let h2 = b.h
        if (a.h > 180) h1 -= 360
        if (b.h > 180) h2 -= 360
        return h1 - h2
    })
    return colors
}