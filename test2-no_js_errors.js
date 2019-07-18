function FuncName(min, max) {
	if (min.length === 5) {
		if (min[1] === "include" && min[3] === "include") {
			var minresultIi = Math.floor(Math.random() * (min[4] - min[2] + 1)) + min[2]
			return minresultIi;
		}
		else if (min[1] === "include" && min[3] === "exclude") {
			var minresultIe = Math.floor(Math.random() * (min[4] - min[2])) + min[2]
			return minresultIe;
		}
		else if (min[0] === "exclude" && min[2] === "include") {
			var minresultEi = Math.floor(Math.random() * (min[4] - min[2] + 1)) + min[2]
			if (minresultEi === min[2]) minresultEi++;
			return minresultEi;
		}
		else {
			var minresultEe = Math.floor(Math.random() * (min[4]-min[2]) + min[2])
			if (minresultEe === min[1]) minresultEe++;
			return minresultEe;
		}
	}
	
	if (max.length === 5) {
		if (max[1] === "include" && max[3] === "include") {
			var maxresultIi = Math.floor(Math.random() * (max[4] - max[2] + 1)) + max[2]
			return maxresultIi;
		}
		else if (max[1] === "include" && max[3] === "exclude") {
			var maxresultIe = Math.floor(Math.random() * (max[4] - max[2])) + max[2]
			return maxresultIe;
		}
		else if (max[1] === "exclude" && max[3] === "include") {
			var maxresultEi = Math.floor(Math.random() * (max[4] - max[2] + 1)) + max[2]
			if (maxresultEi === max[1]) maxresultEi++;
			return maxresultEi;
		}
		else {
			var maxresultEe = Math.floor(Math.random() * (max[4]-max[2]) + max[2])
			if (maxresultEe === max[2]) maxresultEe++;
			return maxresultEe;
		}
	}
	
	
		if (min[0] === "include" && max[0] === "include" && minresultIi && maxresultIi) {
			var result1 = Math.floor(Math.random() * (maxresultIi - minresultIi + 1) ) + minresultIi;
			return result1;
		}
		else if (min[0] === "include" && max[0] === "include" && minresultIe && maxresultIe) {
			var result2 = Math.floor(Math.random() * (maxresultIe - minresultIe + 1) ) + minresultIe;
			return result2;
		}
		else if (min[0] === "include" && max[0] === "include" && minresultEi && maxresultEi) {
			var result3 = Math.floor(Math.random() * (maxresultEi - minresultEi + 1) ) + minresultEi;
			return result3;
		}
		else if (min[0] === "include" && max[0] === "include" && minresultEe && maxresultEe) {
			var result4 = Math.floor(Math.random() * (maxresultEe - minresultEe + 1) ) + minresultEe;
			return result4;
		}
		else if (min[0] === "include" && max[0] === "exclude" && minresultIi && maxresultIi) {
			var result5 = Math.floor(Math.random() * (maxresultIi - minresultIi) ) + minresultIi;
			return result5;
		}
		else if (min[0] === "include" && max[0] === "exclude" && minresultIe && maxresultIe) {
			var result6 = Math.floor(Math.random() * (maxresultIe - minresultIe) ) + minresultIe;
			return result6;
		}
		else if (min[0] === "include" && max[0] === "exclude" && minresultEi && maxresultEi) {
			var result7 = Math.floor(Math.random() * (maxresultEi - minresultEi) ) + minresultEi;
			return result7;
		}
		else if (min[0] === "include" && max[0] === "exclude" && minresultEe && maxresultEe) {
			var result8 = Math.floor(Math.random() * (maxresultEe - minresultEe) ) + minresultEe;
			return result8;
		}
		else if (min[0] === "exclude" && max[0] === "include" && minresultIi && maxresultIi) {
			var result9 = Math.floor(Math.random() * (maxresultIi - minresultIi + 1) ) + minresultIi;
			if (result9 === minresultIi) result9++;
			return result9;
		}
		else if (min[0] === "exclude" && max[0] === "include" && minresultIe && maxresultIe) {
			var result10 = Math.floor(Math.random() * (maxresultIe - minresultIe + 1) ) + minresultIe;
			if (result10 === minresultIe) result10++;
			return result10;
		}
		else if (min[0] === "exclude" && max[0] === "include" && minresultEi && maxresultEi) {
			var result11 = Math.floor(Math.random() * (maxresultEi - minresultEi + 1) ) + minresultEi;
			if (result11 === minresultEi) result11++;
			return result11;
		}
		else if (min[0] === "exclude" && max[0] === "include" && minresultEe && maxresultEe) {
			var result12 = Math.floor(Math.random() * (maxresultEe - minresultEe + 1) ) + minresultEe;
			if (result12 === minresultEe) result12++;
			return result12;
		}
		else if (min[0] === "exclude" && max[0] === "exclude" && minresultIi && maxresultIi) {
			var result13 = Math.floor(Math.random() * (maxresultIi-minresultIi) + minresultIi);
			if (result13 === minresultIi) result13++;
			return result13;
		}
		else if (min[0] === "exclude" && max[0] === "exclude" && minresultIe && maxresultIe) {
			var result14 = Math.floor(Math.random() * (maxresultIe-minresultIe) + minresultIe);
			if (result14 === minresultIe) result14++;
			return result14;
		}
		else if (min[0] === "exclude" && max[0] === "exclude" && minresultEi && maxresultEi) {
			var result15 = Math.floor(Math.random() * (maxresultEi-minresultEi) + minresultEi);
			if (result15 === minresultEi) result15++;
			return result15;
		}
		else {
			var result16 = Math.floor(Math.random() * (maxresultEe-minresultEe) + minresultEe);
			if (result16 === minresultEe) result16++;
			return result16;
		}
		
}

for (var i=0; i<1000; i++) {
			console.log(FuncName(["include", "include", 1, "include", 10], ["include", "include", 15, "exclude", 20]));
		}