var extraFunc = {
	getAlpNum: (istr) => {
		var o = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890";
		var p = "ɐ∀BqɔϽpᗡǝƎɟℲƃƃɥHıIɾſʞʞן˥ɯWuNoOdԀbὉɹᴚsSʇ⊥n∩ʌΛʍMxXʎʎzZ1234567890";
		var nb;
		for (let i = 0; i<= o.length-1; i++) {
			if (istr == o[i]) {
				nb = p[i];
			}
		}
		return nb;		
	},
	getNumName: (inum) => {
		var a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
		var b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		var hb;
		for (let i = 0; i <= b.length-1; i++) {
			if (inum == b[i]) {
				hb = a[i];
			}
		}
		return hb;
	}
}





exports.iRandom = {
  range: {
    intRange: (min, max) => {
      var randomInt = Math.floor(Math.random() * (max - min + 1)) + min
      return randomInt
    },
    floatRange: (min, max) => {
      var randomFloat = (Math.random() * (max - min + 1)) + min
      return randomFloat
    }
  },

  color: {
    hex: () => {
      const hexVal = '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
      return hexVal
    },
    rgba: () => {
      const o = Math.round
      const r = Math.random
      const s = 255
      return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(2) + ')'
    },
    rgb: () => {
      const o = Math.round
      const r = Math.random
      const s = 255
      return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')'
    },
    hsl: () => {
      const rRound = Math.round
      const rRandom = Math.random
      const myhue = 360
      const mysaturnation = 100
      const mylightness = 100
      return 'hsl(' + rRound(rRandom() * myhue) + ', ' + rRound(rRandom() * mysaturnation) + '%' + ', ' + rRound(rRandom() * mylightness) + '%' + ')'
    },
    hwb: () => {
      const rRound = Math.round
      const rRandom = Math.random
      const myhue = 360
      const mywhiteness = 100
      const myblackness = 100
      return 'hwb(' + rRound(rRandom() * myhue) + ', ' + rRound(rRandom() * mywhiteness) + '%' + ', ' + rRound(rRandom() * myblackness) + '%' + ')'
    },
    cmyk: () => {
      var rRound = Math.round
      var rRandom = Math.random
      var mycyan = 100
      var mymagenta = 100
      var myyellow = 100
      var myblack = 100
      const cyanShort = rRound(rRandom() * mycyan) + '%'
      const magentaShort = rRound(rRandom() * mymagenta) + '%'
      const yellowShort = rRound(rRandom() * myyellow) + '%'
      const blackShort = rRound(rRandom() * myblack) + '%'
      return 'cmyk(' + cyanShort + ', ' + magentaShort + ', ' + yellowShort + ', ' + blackShort + ')'
    },
    cmy: () => {
      var rRound = Math.round
      var rRandom = Math.random
      var mycyan = 100
      var mymagenta = 100
      var myyellow = 100
      const cyanShort = rRound(rRandom() * mycyan) + '%'
      const magentaShort = rRound(rRandom() * mymagenta) + '%'
      const yellowShort = rRound(rRandom() * myyellow) + '%'
      return 'cmy(' + cyanShort + ', ' + magentaShort + ', ' + yellowShort + ')'
    }

  },
  choice: {
    letterFrom: (myVariable) => {
      const length = 1
      const myLength = myVariable.length
      for (let i = 0; i < length; i++) {
        var myChoice = myVariable.charAt(Math.floor(Math.random() * myLength))
      }
      return myChoice
    }
  }

}



exports.iRange = {
  intRange: (start, end) => {
	  const iArr = [];
    if (start > end) {
		for (let i = start; i >= end; i--) {
			iArr.push(i);
		}
    } else {
      for (let i = start; i <= end; i++) {
        iArr.push(i)
      }
    }
	return iArr;
  }
}



var iPercent = {
  numORpercentOFmax: (numper, max) => {
    if (typeof numper === 'string') {
      numper = parseInt(numper, 10)
      const myNum = (numper / 100) * max
      return myNum
    } else {
      const myPercent = (numper / max) * 100 + ' %'
      return myPercent
    }
  },
  numISpercentOFmax: (number, percent) => {
    percent = parseInt(percent, 10)
    var maxNum = number / (percent / 100)
    return maxNum
  },
  num1OpPercent: (operation, num1, percent) => {
    if (operation === 'plus') {
      percent = parseInt(percent, 10)
      var num2 = ((percent / 100) * num1) + num1
    }
    if (operation === 'minus') {
      percent = parseInt(percent, 10)
      num2 = num1 - ((percent / 100) * num1)
    }
    return num2
  },
  num1After: (type, num1, percent) => {
    var num2
    if (type === 'reduction') {
      percent = parseInt(percent, 10)
      num2 = num1 / ((100 - percent) / 100)
    }
    if (type === 'increase') {
      percent = parseInt(percent, 10)
      num2 = num1 / ((100 + percent) / 100)
    }
    return num2
  },
  fraction: (num1, num2) => {
    var percent
    if (num1 < num2) {
      percent = ((num1 / num2) * 100) + '%'
    }
    if (num1 > num2) {
      percent = ((num1 / num2) * 100) + '%'
    }
    return percent
  },
  fromNum1TOnum2: (num1, num2) => {
    var percent
    if (num1 < num2) {
      percent = (((num2 / num1) * 100) - 100) + '%'
    }
    if (num1 > num2) {
      percent = (100 - ((num2 / num1) * 100)) + '%'
    }
    return percent
  }
}



exports.iNumOf = {
  date: () => {
    const today = new Date()
    const year = today.getFullYear()
    let month = today.getMonth() + 1
    if (month < 10) month = '0' + month
    let day = today.getDate()
    if (day < 10) day = '0' + day
    let hour = today.getHours()
    if (hour < 10) hour = '0' + hour
    let minute = today.getMinutes()
    if (minute < 10) minute = '0' + minute
    let second = today.getSeconds()
    if (second < 10) second = '0' + second
    let millisecond = today.getMilliseconds()
    if (millisecond < 10) millisecond = '00' + millisecond
    if (millisecond < 100) millisecond = '0' + millisecond

    const date = year.toString() + month.toString() + day.toString()
    const time = hour.toString() + minute.toString() + second.toString() + millisecond.toString()

    const semifinal = date + time
    const finall = parseInt(semifinal, 10)
    return finall
  }
}



exports.iConvert = {
  color: {
    rgb2Hex: (r, g, b) => {
      r = r.toString(16)
      g = g.toString(16)
      b = b.toString(16)

      if (r.length === 1) {
        r = '0' + r
      }
      if (g.length === 1) {
        g = '0' + g
      }
      if (b.length === 1) {
        b = '0' + b
      }

      return '#' + r + g + b
    },
    rgba2Hex: (r, g, b, a) => {
      r = r.toString(16)
      g = g.toString(16)
      b = b.toString(16)
      a = Math.round(a * 255).toString(16)

      if (r.length === 1) {
        r = '0' + r
      }
      if (g.length === 1) {
        g = '0' + g
      }
      if (b.length === 1) {
        b = '0' + b
      }
      if (a.length === 1) {
        a = '0' + a
      }

      return '#' + r + g + b + a
    },
    hex2Rgb: (h) => {
      let r = 0
      let g = 0
      let b = 0

      // 3 digits
      if (h.length === 4) {
        r = '0x' + h[1] + h[1]
        g = '0x' + h[2] + h[2]
        b = '0x' + h[3] + h[3]

        // 6 digits
      } else if (h.length === 7) {
        r = '0x' + h[1] + h[2]
        g = '0x' + h[3] + h[4]
        b = '0x' + h[5] + h[6]
      }

      return 'rgb(' + +r + ',' + +g + ',' + +b + ')'
    },
    hexa2Rgba: (h) => {
      let r = 0
      let g = 0
      let b = 0
      let a = 1

      if (h.length === 5) {
        r = '0x' + h[1] + h[1]
        g = '0x' + h[2] + h[2]
        b = '0x' + h[3] + h[3]
        a = '0x' + h[4] + h[4]
      } else if (h.length === 9) {
        r = '0x' + h[1] + h[2]
        g = '0x' + h[3] + h[4]
        b = '0x' + h[5] + h[6]
        a = '0x' + h[7] + h[8]
      }
      a = +(a / 255).toFixed(3)

      return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + a + ')'
    }
  },
  string2Num: (myString, level) => {
    let elo = ''
    myString = myString.split('').reverse().join('')
    for (let i = 1; i <= myString.length; i++) {
      elo += myString.charCodeAt(myString.length - i) * (i + level)
    }
elo = parseInt(elo, 10);
    return elo
  },
  int2Roman: (num) => {
    if (typeof num !== 'number') { return false }
	num = num.toFixed();
    const digits = String(+num).split('')
    const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
      '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
      '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    let romanNum = ''
    let i = 3
    while (i--) { romanNum = (key[+digits.pop() + (i * 10)] || '') + romanNum }
    return Array(+digits.join('') + 1).join('M') + romanNum
  },
  num2Num: (inum, level) => {
	  inum = inum.toString();
	  let arr = [];
	  for (let i = 0; i <= inum.length-1; i++) {
		  arr.push(extraFunc.getNumName(inum.charAt(i)));
	  }
	  let res = arr.join("");
	  return exports.iConvert.string2Num(res, level);	  
  },
  var2ArrayOfChar: (ivar) => {
	  ivar = ivar.split("");
	  return ivar;
  },
  var2ArrayOfWords: (ivar) => {
	  ivar = ivar.split(" ");
	  return ivar;
  }
}



exports.iCombination = {
  combinations_k: (set, k) => {
    var i, j, combs, head, tailcombs
    if (k > set.length || k <= 0) {
      return []
    }
    if (k === set.length) {
      return [set]
    }
    if (k === 1) {
      combs = []
      for (i = 0; i < set.length; i++) {
        combs.push([set[i]])
      }
      return combs
    }
    combs = []
    for (i = 0; i < set.length - k + 1; i++) {
      head = set.slice(i, i + 1)
      tailcombs = exports.iCombination.combinations_k(set.slice(i + 1), k - 1)
      for (j = 0; j < tailcombs.length; j++) {
        combs.push(head.concat(tailcombs[j]))
      }
    }
    return combs
  },
  combinations: (set) => {
    var k, i, combs, kCombs
    combs = []
    for (k = 1; k <= set.length; k++) {
      kCombs = exports.iCombination.combinations_k(set, k)
      for (i = 0; i < kCombs.length; i++) {
        combs.push(kCombs[i])
      }
    }
    return combs
  }
}



exports.iSequence = {
  fibonacci: {
    seq: (n) => {
      if (n === 1) {
        return [1, 1]
      } else {
        const s = exports.iSequence.fibonacci.seq(n - 1)
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
      }
    },
    num: (num) => {
      if (num <= 0) return 0
      if (num <= 1 && num <= 2) return 1
      return exports.iSequence.fibonacci.num(num - 1) + exports.iSequence.fibonacci.num(num - 2)
    }
  },
  arithmetic: {
    seq: (n, a, d) => {
      const seq = [a, a + d]
      for (let i = 3; i <= n; i++) {
        seq.push(seq[seq.length - 1] + d)
      }
      return seq
    },
    num: (n, a, d) => {
      return a + d * (n - 1)
    }

  },
  geometric: {
    seq: (n, a, r) => {
      const seq = [a, a * r]
      for (let i = 3; i <= n; i++) {
        seq.push(seq[seq.length - 1] * r)
      }
      return seq
    },
    num: (n, a, r) => {
      return a * Math.pow(r, (n - 1))
    }
  },
  triangular: {
    seq: (n) => {
      const seq = [1, 3]
      for (let i = 3; i <= n; i++) {
        seq.push(i * (i + 1) / 2)
      }
      return seq
    },
    num: (n) => {
      return n * (n + 1) / 2
    }
  },
  square: {
    seq: (n) => {
      const seq = [2]
      for (let i = 1; i <= n - 1; i++) {
        seq.push(Math.pow(seq.length + 1, 2))
      }
      return seq
    },
    num: (n) => {
      return Math.pow(n, 2)
    }
  },
  cube: {
    seq: (n) => {
      const seq = [2]
      for (let i = 1; i <= n - 1; i++) {
        seq.push(Math.pow(seq.length + 1, 3))
      }
      return seq
    },
    num: (n) => {
      return Math.pow(n, 3)
    }
  },
  stackChance: (max, stackBy) => {
    var stacking = [max, max - iPercent.numORpercentOFmax(stackBy, max)]

    for (let i = 1; i <= 1000; i++) {
      stacking.push(stacking[i] - iPercent.numORpercentOFmax(stackBy, stacking[i]))
      if (stacking[i] <= 1) break
    }
    stacking.reverse()
    return stacking
  }
}



exports.iSeries = {
  addition: (...n) => {
    return n.reduce((previous, current) => {
      return previous + current
    })
  },
  subtraction: (...n) => {
    return n.reduce((previous, current) => {
      return previous - current
    })
  },
  multiplication: (...n) => {
    return n.reduce((previous, current) => {
      return previous * current
    })
  },
  division: (...n) => {
    return n.reduce((previous, current) => {
      return previous / current
    })
  },
  modulus: (...n) => {
	  return n.reduce((previous, current) => {
		  return previous % current
	  })
  }
}



exports.iRead = {
  JSON: (iURL, callback) => {
	  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        /*console.log('responseText:' + xmlhttp.responseText)*/
        try {
          var iData = JSON.parse(xmlhttp.responseText)
        } catch (err) {
          console.log(err.message + ' in ' + xmlhttp.responseText)
          return
        }
        callback(iData)
      }
    }
    xmlhttp.open('GET', iURL, true)
    xmlhttp.send()
  }
}



exports.iReverse = {
	string: (istr) => {
		return istr.split("").reverse().join("");
	},
	number: (inum) => {
		inum = inum.toString();
		inum = inum.split("").reverse().join("");
		inum = parseInt(inum, 10);
		return inum;
	}
}



exports.iUpsideDown = {
	
	normal: (istr) => {
		let arr = [];
		for (let i = 0; i<= istr.length-1; i++) {
			arr.push(extraFunc.getAlpNum(istr.charAt(i)));
		}
		let res = arr.join("");
		return res;
	}	
}



exports.iArray = {
	unique: (uniq) => {
		return uniq = [...new Set(uniq)];
	}
}



exports.iMath = {
	median: (arr) => {
		const mid = Math.floor(arr.length / 2)
  const nums = [...arr].sort((a, b) => a - b)
  if (arr.length % 2 == 0) {
    return nums[mid]
	}
	else {
    return (nums[mid - 1] + nums[mid]) / 2
  }
	}
}





