# iRandomJS

```javascript
var iRandomJS = require("i-randomjs");
```







## iRandom.range.intRange

returns random int number from decided range

```javascript
iRandomJS.iRandom.range.intRange(1, 100);
// 43
```



## iRandom.range.floatRange

returns random float number from decided  range

```javascript
iRandomJS.iRandom.range.floatRange(1, 10);
// 5.725229129354005
```



## iRandom.color.hex

generates one random hex color

```javascript
iRandomJS.iRandom.color.hex();
// "#b140d0"
```



## iRandom.color.rgba

generates one random RGBA(Red, Green, Blue, Alpha) color

```javascript
iRandomJS.iRandom.color.rgba();
// "rgba(225,129,230,0.81)"
```



## iRandom.color.rgb

generates one random RGB(Red, Green, Blue) color

```javascript
iRandomJS.iRandom.color.rgb();
// "rgb(155,129,253)"
```



## iRandom.color.hsl

generates one random HSL color

```javascript
iRandomJS.iRandom.color.hsl();
// "hsl(347, 60%, 89%)"
```



## iRandom.color.hwb

generates one random HWB color

```javascript
iRandomJS.iRandom.color.hwb();
// "hwb(52, 3%, 70%)"
```



## iRandom.color.cmyk

generates one random CMYK color

```javascript
iRandomJS.iRandom.color.cmyk();
// "cmyk(11%, 99%, 54%, 17%)"
```



## iRandom.color.cmy

generates one random CMY color

```javascript
iRandomJS.iRandom.color.cmy();
// "cmy(60%, 10%, 36%)"
```



## iRandom.choice.letterFrom

returns random letter from string

```javascript
let name = "iVesha";
iRandomJS.iRandom.choice.letterFrom(name);
// "V"
```





## iRange.intRange

returns an array of range of int numbers

```javascript
let my_range1 = iRandomJS.iRange.intRange(1, 10);
console.log(my_range1);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let my_range2 = iRandomJS.iRange.intRange(7, 3);
console.log(my_range2);
// [7, 6, 5, 4, 3]
```





## iNumOf.date

returns current date and time in form of number

```javascript
iRandomJS.iNumOf.date();
// 20190905012728390
```





## iConvert.color.rgb2Hex

converts RGB color to hex

```javascript
iRandomJS.iConvert.color.rgb2Hex(120, 60, 30);
// "#783c1e"
```



## iConvert.color.rgba2Hex

converts RGBA color to hexa(hex color with alpha)

```javascript
iRandomJS.iConvert.color.rgba2Hex(25, 30, 80, 0.6);
// "#191e5099"
```



## iConvert.color.hex2Rgb

converts hex color to RGB

```javascript
iRandomJS.iConvert.color.hex2Rgb("#191e50");
// "rgb(25,30,80)"
```



## iConvert.color.hexa2Rgba

converts hexa color to RGBA

```javascript
iRandomJS.iConvert.color.hexa2Rgba("#191e5099");
// "rgba(25,30,80,0.6)"
```



## iConvert.string2Num

converts string to number using decaded level

```javascript
const iVesha2Num_1 = iRandomJS.iConvert.string2Num("iVesha", 1);
console.log(iVesha2Num_1);
// 210258404575624679

const iVesha2Num_5 = iRandomJS.iConvert.string2Num("iVesha", 5);
console.log(iVesha2Num_5);
// 630602808103510401067
```



## iConvert.int2Roman

converts int number to roman number

```javascript
iRandomJS.iConvert.int2Roman(21);
// "XXI"
```



## iConvert.num2Num

convert number to another number using decided level

```javascript
var number1 = iRandomJS.iConvert.num2Num(1, 1);
console.log(number1);
// 222330404

var number2 = iRandomJS.iConvert.num2Num(number1, 1);
console.log(number2);
/* 2323574445807147779281071111012761248148214141515185617682052191920202562222226222664255028863159319235383030353435523366377440954104
*/
```



## iConvert.var2ArrayOfChar

converts variable to Array of characters

```javascript
iRandomJS.iConvert.var2ArrayOfChar("iRandomJS");
// ["i", "R", "a", "n", "d", "o", "m", "J", "S"]
```



## iConvert.var2ArrayOfWords

converts variable to Array of words

```javascript
iRandomJS.iConvert.var2ArrayOfWords("It's called appreciation");
// ["It's", "called", "appreciation"]
```





## iCombination.combinations

gives an array of variable you want to combine indexses of

```javascript
let myData = ["a", 15, true];
let combineData = iRandomJS.iCombination.combinations(myData);

console.log(combineData);
/*
[ [ 'a' ],
  [ 15 ],
  [ true ],
  [ 'a', 15 ],
  [ 'a', true ],
  [ 15, true ],
  [ 'a', 15, true ] ]
*/
```



## iCombination.combinations_k

gives an array of variable you want to combine indexes of, with decided length

```javascript
let combination = iRandomJS.iCombination.combinations_k([["i", 7], ["g", 1], ["v", 10]], 2);
console.log(combination);
/*
[ [ [ 'i', 7 ], [ 'g', 1 ] ],
  [ [ 'i', 7 ], [ 'v', 10 ] ],
  [ [ 'g', 1 ], [ 'v', 10 ] ] ]
  */
```





## SOON !

