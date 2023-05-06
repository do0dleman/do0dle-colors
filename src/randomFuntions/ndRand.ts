/**
 * returns random number corresponding to specified normal distribution
 * @param {nubmer} [mu] mean value
 * @param {nubmer} [sigma] standard deviation value
 * @param {nubmer} [nsamples] amount of samples
 * @returns {number} random number
 */
export default function ndRand(mu?: number, sigma?: number, nsamples?: number): number {
    if (!nsamples) nsamples = 6
    if (!sigma) sigma = Math.random() / 1.8 + 0.7
    if (!mu) mu = 0

    var run_total = 0
    for (var i = 0; i < nsamples; i++) {
        run_total += Math.random()
    }

    let randomVal = sigma * (run_total - nsamples / 2) / (nsamples / 2) + mu
    while (randomVal > 1 || randomVal < 0) randomVal = ndRand(mu, sigma, nsamples)


    return randomVal
}