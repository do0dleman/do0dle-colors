import Color from "../color/color";


export default function generateTriadColors(seedColor: Color, colorAmount: number, offset?: number): Color[] {
    if (!offset) offset = Math.random() * 5

    const colors: Color[] = [seedColor]

    for (let i = 1; i < colorAmount; i++) {
        let color = new Color(colors[i - 1])
        color.shiftH(120)
        colors.push(color)
    }

    return colors
}