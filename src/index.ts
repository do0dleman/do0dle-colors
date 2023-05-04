import Color from "./color/color";
import generateColorShades from "./genFunctions/generateColorShades";
import rgbToHsl from "./utils/rgbToHsl";
import http from 'http';

// console.log(new Color('#ffffff'))
const color = new Color('#fe3107')
const colorAmount = 10
const shades = generateColorShades(color, colorAmount)
console.log(shades)

const handleRequest = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage; }) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    // for shade of shades
    for (let shade of shades) {
        res.write(`<div style="background: ${shade.getCssHsl()}; height: ${100 / colorAmount}%"></div>`);
    }
    res.end();
}
http.createServer(handleRequest).listen(3000)