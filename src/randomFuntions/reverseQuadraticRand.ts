/**
 * returns random number corresponding to the pdf y=3(x-1)^2
 * @returns {number} random number  
 */
export default function reverseQuadraticRand(): number {
    return (Math.cbrt(Math.random() - 1) + 1)
}