export default function clamp(num: number, max?: number, min?: number) {

    if (min === undefined) min = 0
    if (max === undefined) max = 1

    return Math.min(Math.max(num, min), max)
}