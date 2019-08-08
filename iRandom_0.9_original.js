
/*  ONE RANDOM THING IN DECIDED RANGE  */

//get one random Int from decided range
function iRandom_randomInt_FromRange(rIFR_min, rIFR_max) {
		var randomInt = Math.floor(Math.random() * (rIFR_max - rIFR_min + 1) ) + rIFR_min;
		return randomInt;
}

//get one random float from decided range
function iRandom_randomFloat_FromRange(rFFR_min, rFFR_max) {
		var randomFloat = (Math.random() * (rFFR_max - rFFR_min + 1) ) + rFFR_min;
		return randomFloat;
}



/*  GENERATE FROM DECIDED RANGE  */

//all ints
function IntRange(IR_min, IR_max){
var i_arr = [];
for (let i = IR_min; i <= IR_max; i++) {
     i_arr.push(i);
}
return i_arr;
}



/*  PERCENTRAGE <-> NUMBER  */

//get gercentrage of decided number
function percentOfNum(pON_num, pON_max){
	var myPercent = (pON_num / pON_max) * 100;
	return myPercent+'%';
}

//get number of decided percentrage
function numOfPercent(nOP_percent, nOP_max) { 
	var myNum = (nOP_percent / 100) * nOP_max;
	return myNum;
}

//get max number when is only known number and it's percent
function maxNumofPercentNum(mNoPN_num, mNoPN_percent) {
	var maxNumOfNP = mNoPN_num / (mNoPN_percent / 100);
	return maxNumOfNP;
}



/*  DATE  */

//date num
function DateNumber() {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth()+1;
	if (month < 10) month = '0' + month;
	let day = today.getDate();
	if (day < 10) day = '0' + day;
	let hour = today.getHours();
	if (hour < 10) hour = '0' + hour;
	let minute = today.getMinutes();
	if (minute < 10) minute = '0' + minute;
	let second = today.getSeconds();
	if (second < 10) second = '0' + second;
	let millisecond = today.getMilliseconds();
	if (millisecond < 10) millisecond = '00' + millisecond;
	if (millisecond < 100) millisecond = '0' + millisecond;
	
	let date = year.toString() + month.toString() + day.toString();
	let time = hour.toString() + minute.toString() + second.toString() + millisecond.toString();
	
	let semifinal = date + time;
	let finall = Number(semifinal);
	return finall;
}



/*  RANDOM  UPPERCASE AND LOWERCASE LETTERS and NUMBERS IN LENGHT YOU DECIDE  */

//generate random characters , in length you decide
function iRandom_charactersAll(cA_length) {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < cA_length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

//generate random numbers , in lenght you decide
function iRandom_charactersNums(cN_length) {
   let result = '';
   let characters = '0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < cN_length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

//generate random uppercase letters , in lenght you decide
function iRandom_charactersUletters(cUl_length) {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let charactersLength = characters.length;
   for ( let i = 0; i < cUl_length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

//generate random lowercase letters , in lenght you decide
function iRandom_charactersLletters(cLl_length) {
   let result = '';
   let characters = 'abcdefghijklmnopqrstuvwxyz';
   let charactersLength = characters.length;
   for ( let i = 0; i < cLl_length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


//generate random uppercase and lowercase letters , in lenght you decide
function iRandom_charactersULletters(cULl_length) {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   let charactersLength = characters.length;
   for ( let i = 0; i < cULl_length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}



/*  COLORS  */

//random hex color
function iRandom_random_hex() {
	let hexVal = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	return hexVal;
}

//random rgba color
function iRandom_random_rgba() {//red green blue alpha
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(2) + ')';
}

//random rgb color
function iRandom_random_rgb() {//red green blue
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

//random hsl color
function iRandom_random_hsl() {//hue, saturnation, lightness
	let rRound = Math.round, rRandom = Math.random, myhue = 360, mysaturnation = 100, mylightness = 100;
	return 'hsl(' + rRound(rRandom()*myhue) + ', ' + rRound(rRandom()*mysaturnation) + '%' + ', ' + rRound(rRandom()*mylightness) + '%' + ')';
}

//random hwb color
function iRandom_hwb() {//hue , whiteness, blackness   //CSS4
	let rRound = Math.round, rRandom = Math.random, myhue = 360, mywhiteness = 100, myblackness = 100;
	return 'hwb(' + rRound(rRandom()*myhue) + ', ' + rRound(rRandom()*mywhiteness) + '%' + ', ' + rRound(rRandom()*myblackness) + '%' + ')';
}

//random cmyk color
function iRandom_cmyk() {//cyan, magenta, yellow, black   //CSS4
	var rRound = Math.round, rRandom = Math.random, mycyan = 100, mymagenta = 100, myyellow = 100, myblack = 100;
	let cyanShort = rRound(rRandom()*mycyan) + '%';
	let magentaShort = rRound(rRandom()*mymagenta) + '%';
	let yellowShort = rRound(rRandom()*myyellow) + '%';
	let blackShort = rRound(rRandom()*myblack) + '%';
	return 'cmyk(' + cyanShort + ', ' + magentaShort + ', ' + yellowShort + ', ' + blackShort + ')';
}

//random cmy color //CSS4
function iRandom_cmy() {
	var rRound = Math.round, rRandom = Math.random, mycyan = 100, mymagenta = 100, myyellow = 100;
	let cyanShort = rRound(rRandom()*mycyan) + '%';
	let magentaShort = rRound(rRandom()*mymagenta) + '%';
	let yellowShort = rRound(rRandom()*myyellow) + '%';
	return 'cmy(' + cyanShort + ', ' + magentaShort + ', ' + yellowShort + ')';
}



/*  GENERATE RANDOM LETTER FROM DECIDED STRING  */
function iRandom_choice(myVariable) {
	let length = 1;
	let myLength = myVariable.length;
	for ( let i = 0; i < length; i++ ) {
       myChoice = myVariable.charAt(Math.floor(Math.random() * myLength));
   }
   return myChoice;
};



// NUMBER COMBINATIONS

//generate combinations with k numbers
function combinations_k(set, k) {
	var i, j, combs, head, tailcombs;
	if (k > set.length || k <= 0) {
		return [];
	}
	if (k == set.length) {
		return [set];
	}
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i + 1);
		tailcombs = combinations_k(set.slice(i + 1), k - 1);
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

//generate combinations with all possible numbers 
function combinations(set) {
	var k, i, combs, k_combs;
	combs = [];
	for (k = 1; k <= set.length; k++) {
		k_combs = combinations_k(set, k);
		for (i = 0; i < k_combs.length; i++) {
			combs.push(k_combs[i]);
		}
	}
	return combs;
}



/*  STRING TO NUMBER  */
function String2Num(myString, level) {
    let elo = "";
    myString = myString.split("").reverse().join("")
    for (let i = 1; i <= myString.length; i++) {
        elo += myString.charCodeAt(myString.length - i) * (i+level);
    }
    
    return elo;
}



/* FIBONACCI NUMBERS */

//returns an array of first n Fibonacci numbers
function fibonacci_series(n) {
  if (n===1) {
    return [0, 1];
	} 
  else {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
}}

//returns one Fibonacci number
function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

















