# do0dle-colors

do0dle-colors is a color scheme generation library with no dependencies that uses OkLCh under the hood to generate color schemes.

> Note that there is an error ~0.1 (depending on color) in conversion from OkLab color space into an RGB color space.

The bundle size is [currently ~2kB](https://bundlephobia.com/package/do0dle-colors).

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
Or using distinct methods for more customization
```js
// similar to color.getColorScheme(10, 'analogous')
// but only hue is being changed 
color.getAnalogous(10) 

// but you can specify more parameters
const step = 10
color.getAnalogous(10, step) 
``` 
You can get an array of avalible generation methods
```js
import { genMethods } from 'do0dle-colors'
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
* css rgb, hsl or oklch property:
```js
new Color('rgb(255 10 231)')
new Color('rgb(255, 10, 231)')

new Color('hsl(306deg 100% 52%)')
new Color('hsl(0.85turn 100% 52%)')

new Color('oklch(74% .63 210)')
new Color('oklch(74% .63 3.67rad)')
```
* hsl, rgb or oklch array:
```js
//non-normalized color data
new Color([255, 10, 231], 'rgb')
new Color([306, 100, 52], 'hsl')

//Normalized color data
new Color([1, 0.039, 0.906], 'rgb', true)
new Color([0.85, 1, 0.52], 'hsl', true)

// isNormalized is not considered with oklch
// Lightness and Chroma must be in [0;1] 
// and hue must be in degrees
new Color([.56, .12, 240])  
new Color([.56, .12, 240], 'OkLCh')  
```

### Color get methods 

You can get **Color**'s color value as:

* css oklch property string:
```js
const color = new Color([.54, .34, 121])
color.getCssOklch() // 'oklch(54% 34% 121)'
```
* css hsl property string:
```js
const color = new Color([306, 100, 52], 'hsl')
color.getCssHsl() // 'hsl(306deg 100% 52%)'
```
* css rgb property string:
```js
const color = new Color([306, 100, 52], 'hsl')
color.getCssRgb() // 'rgb(255 10 231)'
```
* hex string:
```js
const color = new Color([306, 100, 52], 'hsl')
color.getCssHex() // '#FF0AE7'
```
* OkLCh array:
```js
const color = new Color([.54, .34, 121])
color.getOkLChArray() // [.54, .34, 121]
```
* hsl array:
```js
const color = new Color([306, 100, 52], 'hsl')
color.getHslArray() // [306, 100, 52]
```
* rgb array:
```js
const color = new Color([306, 100, 52], 'hsl')
color.getRgbArray() // [255, 10, 231]
```

## License

See the [LICENSE](https://github.com/do0dleman/do0dle-colors/blob/master/LICENSE.md) file for license rights and limitations (MIT).
