/**
 * Parses css color property to 3 digit array
 * @param {string} cssString css color porperty string 
 * @returns {string[]} array of numbers represented by a string
 */
export default function getCssNums(cssString: string): string[] {
    if (cssString.includes(',')) {
        cssString = cssString.replace(/,/g, '')
    }

    const nums = cssString.match(/(\s)?(\.)?(\d+\.)?\d+(\s)?/g)!
    if (nums.length == 4) nums.pop()

    return nums
}