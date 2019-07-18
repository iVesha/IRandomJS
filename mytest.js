/*
{
	"min" = [
	"include" / "exclude", //final
	"include" / "exclude", //num1
	num1: ,
	"include" / "exclude", //num2
	num2: ,
	],
	"max":[
	"include" / "exclude", //final
	"include" / "exclude", //num1
	num1: ,
	"include" / "exclude", //num2
	num2: ,
	]
}
*/



function FuncName(min, max) {
	if (min.length == 5) {
		if (min[1] == "include" && min[3] == "include") {
			let minresult = Math.floor(Math.random() * (min[4] - min[2] + 1)) + min[2]
			return minresult;
		}
		if (min[1] == "include" && min[3] == "exclude") {
			let minresult = Math.floor(Math.random() * (min[4] - min[2])) + min[2]
			return minresult;
		}
		if (min[0] == "exclude" && min[2] == "include") {
			let minresult = Math.floor(Math.random() * (min[4] - min[2] + 1)) + min[2]
			if (minresult == min[2]) minresult++;
			return minresult;
		}
		if (min[1] == "exclude" && min[3] == "exclude") {
			let minresult = Math.floor(Math.random() * (min[4]-min[2]) + min[2])
			if (minresult == min[1]) minresult++;
			return minresult;
		}
	}
	
	if (max.length == 5) {
		if (max[1] == "include" && max[3] == "include") {
			let maxresult = Math.floor(Math.random() * (max[4] - max[2] + 1)) + max[2]
			return maxresult;
		}
		if (max[1] == "include" && max[3] == "exclude") {
			let maxresult = Math.floor(Math.random() * (max[4] - max[2])) + max[2]
			return maxresult;
		}
		if (max[1] == "exclude" && max[3] == "include") {
			let maxresult = Math.floor(Math.random() * (max[4] - max[2] + 1)) + max[2]
			if (maxresult == max[1]) maxresult++;
			return maxresult;
		}
		if (max[1] == "exclude" && max[3] == "exclude") {
			let maxresult = Math.floor(Math.random() * (max[4]-max[2]) + max[2])
			if (maxresult == max[2]) maxresult++;
			return maxresult;
		}
	}
	
	
		if (min[0] == "include" && max[0] == "include") {
			let result = Math.floor(Math.random() * (maxresult - minresult + 1) ) + minresult
			return result;
		}
		if (min[0] == "include" && max[0] == "exclude") {
			let result = Math.floor(Math.random() * (maxresult - minresult) ) + minresult;
			return result;
		}
		if (min[0] == "exclude" && max[0] == "include") {
			let result = Math.floor(Math.random() * (maxresult - minresult + 1) ) + minresult;
			if (result == minresult) result++;
			return result;
		}
		if (min[0] == "exclude" && max[0] == "exclude") {
			let result = Math.floor(Math.random() * (maxresult-min) + minresult);
			if (result == minresult) result++;
			return result;
		}
		
}

for (let i=0; i<100; i++) {
			console.log(FuncName(["include", "include", 1, "include", 10], ["include", "include", 15, "exclude", 20]));
		}