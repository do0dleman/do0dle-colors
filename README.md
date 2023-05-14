# do0dle-colors

do0dle-colors is a color scheme generation library with no dependencies.

The bundle size is [currently 2kB](https://bundlephobia.com/package/do0dle-colors@1.1.3).

## Instalation

Install with any prefered package manager such as `npm`.

`npm i do0dle-colors`

## Usage

Import **Color** object
```js
import { Color } from 'do0dle-colors'
```
Create **Color** instance
```js 
const color = new Color('#ff440e')
```
Use **getColorScheme** and specify amount of colors in color scheme
```js
const colors = color.getColorScheme(10)
```

### Generation methods

You can specify color scheme generation method
```js
color.getColorScheme(10, 'monochromatic')
```
Here is the table of avalible generation methods:

|    Color scheme     |
|---------------------|
|     analogous       |
|    complimentary    |
|    monochromatic    |
|      quadratic      |
| split complimentary |
|      tetraidic      |
|       triadic       |

>You can learn more about them [here](https://en.wikipedia.org/wiki/Color_scheme).

### Color constructors

You can create **Color** instance via:

* hex string: 
```js
new Color('#ff0ae7')
```
* css rgb or hsl property:
```js
new Color('rgb(255 10 231)')
new Color('rgb(255, 10, 231)')

new Color('hsl(306deg 100% 52%)')
new Color('hsl(0.85turn 100% 52%)')
```
* hsl or rgb array:
```js
//non-normalized color data
new Color([255, 10, 231], 'rgb')
new Color([306, 100, 52], 'hsl')

//Normalized color data
new Color(1, 0.039, 0.906, 'rgb', true)
new Color(0.85, 1, 0.52, 'hsl', true)
```

### Color get methods 

You can **Color** color value as:

* css hsl property string:
```js
const color = new Color([306, 100, 52], 'hsl')
color.getCssHsl() // 'hsl(306deg 100% 52%)'
```
* hsl array:
```js
const color = new Color([306, 100, 52], 'hsl')
color.getHslArray() // [306, 100, 52]
```

## License

See the [LICENSE](https://github.com/do0dleman/do0dle-colors/blob/master/LICENSE.md) file for license rights and limitations (MIT).
