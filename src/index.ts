import Color from "./color/color";
import http from 'http';
import generateColors from "./generateColors";
import generateSplitComplementary from "./genFunctions/generateSplitCompColors";

const color = new Color('#fe3107')
const colorAmount = 10
const colors = generateColors(color, colorAmount, 'split complimentary')
// const colors = generateSplitComplementary(color, colorAmount)

const handleRequest = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage; }) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    for (let shade of colors) {
        res.write(`<div style="background: ${shade.getCssHsl()}; height: ${100 / colorAmount}%"></div>`);
    }
    res.end();
}
http.createServer(handleRequest).listen(3000)