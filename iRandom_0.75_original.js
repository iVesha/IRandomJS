
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



/*  [WIP]  */   /*
function iRandom_range_skip(min, max, skip) {
    let rrange = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (rrange == skip) rrange++;
    return rrange;
}
*/



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



/*  GENERATE ONE RANDOM EMOTION  */
function iRandom_emotions() {
	let emotionS = [
	"Love", "Affection", "Adoration", "Affection", "Love", "Fondness", "Liking", "Attraction", "Caring", "Tenderness", "Compassion", "Sentimentality", 
	"Lust", "Arousal", "Desire", "Lust", "Passion", "Infatuation", "Longing", "Longing", "Joy", "Cheerfulnes", "Amusement", "Bliss", "Cheerfulness", 
	"Gaiety", "Glee", "Jolliness", "Joviality", "Joy", "Delight", "Enjoyment", "Gladness", "Happiness", "Jubilation", "Elation", "Satisfaction", 
	"Ecstasy", "Euphoria", "Zest", "Enthusiasm", "Zeal", "Zest", "Excitement", "Thrill", "Exhilaration", "Contentment", "Contentment", "Pleasure", 
	"Pride", "Pride", "Triumph", "Optimism", "Eagerness", "Hope", "Optimism", "Enthrallment", "Enthrallment", "Rapture", "Relief", "Relief", 
	"Suprise", "Suprise", "Amazement", "Suprise", "Astonishment", "Anger", "Irritation", "Aggravation", "Irritation", "Agitation", "Annoyance", 
	"Grouchiness", "Grumpiness", "Exasperation", "Exasperation", "Frustration", "Range", "Anger", "Range", "Outrage", "Fury", "Wrath", "Hostility", 
	"Ferocity", "Bitterness", "Hate", "Loathing", "Scorn", "Spite", "Vengefulness", "Dislike", "Resentment", "Disgust", "Disgust", "Revulsion", 
	"Contempt", "Envy", "Envy", "Jealousy", "Torment", "Torment", "Sadness", "Suffering", "Agony", "Suffering", "Hurt", "Anguish", "Sadness", 
	"Depression", "Despair", "Hopelessness", "Gloom", "Glumness", "Sadness", "Unhappiness", "Grief", "Sorrow", "Woe", "Misery", "Melancholy", 
	"Disappointment", "Dismay", "Disappointment", "Displeasure", "Shame", "Guilt", "Shame", "Regret", "Remorse", "Neglect", "Alienation", 
	"Isolation", "Neglect", "Loneliness", "Rejection", "Homesickness", "Defeat", "Dejection", "Insecurity", "Embarrassment", "Humiliation", 
	"Insult", "Sympathy", "Pity", "Sympathy", "Fear", "Horror", "Alarm", "Shock", "Fear", "Fright", "Horror", "Terror", "Panic", "Hysteria", 
	"Mortification", "Nervousness", "Anxiety", "Nervousness", "Tenseness", "Uneasiness", "Apprehension", "Worry", "Distress", "Dread"
	];
var emotion = emotionS[Math.floor(Math.random()*emotionS.length)];
return emotion;
}



/*  LEAGUE OF LEGENDS  */

//generate one random champion name
function iRandom_LoL_champions_random() {
	let championS = [
	"Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion_Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", 
	"Caitlyn", "Camille", "Cassiopeia", "Cho_Gath", "Corki", "Darius", "Diana", "Dr_Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", 
	"Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", 
	"Ivern", "Janna", "Jarvan_IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai_Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", 
	"Kennen", "Kha_Zix", "Kindred", "Kled", "Kog_Maw", "LeBlanc", "Lee_Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", 
	"Maokai", "Master_Yi", "Miss_Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu_&_Willump", 
	"Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek_Sai", "Renekton", "Rengar", "Riven", "Rumble", 
	"Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm_Kench", 
	"Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted_Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", 
	"Veigar", "Vel_Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin_Zhao", "Yasuo", "Yorick", "Yuumi", 
	"Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"
	];
	var champion = championS[Math.floor(Math.random()*championS.lenght)];
return champion;
}

//generate one random name of skin/skinline
function iRandom_LoL_skins_random() {
	let skinS = [
	"Academy", "Professor", "Arcade", "Battle Boss", "Arclight", "Arctic Ops", "Arctic Warfare", "Battlecast", "Resistance", "Creator", 
	"Beast Hunter", "Bewitching", "Little Devil", "Little Angel", "Bewitching", "Bilgewater", "Blood Moon", "Blood Stone", "Sea Hunter", 
	"Rogue Admiral", "Ironside", "Corsair", "Butcher", "Dark Candy", "Candy King", "Candy Cane", "Candy Queen", "Captain", "Challenger", 
	"Conqueror", "Championship", "Forsaken", "Chosen", "Commando", "Cosmic Queen", "Dark Cosmic", "Cosmic Reaver", "Cosmic Enchantress", 
	"Cosmic Blade", "Cosmic Dawn", "Cosmic Dusk", "Cosmic Defender", "Cosmic", "Cottontail", "Coven", "Safecracker", "Pickpocket", "Crimson Elite", 
	"Sashimi", "Bird", "Barbecue", "Sinful Succulence", "Sinful", "Butcher", "Baker", "Butcher", "Pizza Delivery", "Master Chef", "Dark Star", 
	"Dark Waters", "Dawnbringer", "Nightbringer", "Death Blossom", "Death Sworn", "Debonair", "Mythical", "Scuba", "Deep Sea", "Deep Terror", 
	"Definitely Not", "Demacia Vice", "Dragonblade", "Dragonslayer", "Dragon Master", "Dragon Sorceress", "Dragon Trainer", "Dragon", 
	"Dreadknight", "Dreadnova", "Dunkmaster", "Ambitious Elf", "Happy Elf", "Earnest Elf", "Angry Elf", "Jealous Elf", "Elf", "Elderwood", "Dryad", 
	"Emerald", "Ruby", "Sapphire", "Topaz", "Eternum", "Fnatic", "Freljord", "Frostfire", "Blackfrost", "Frosted", "Frostblade", "Frost Queen", 
	"Frost King", "Frozen Prince", "Frozen Princess", "Frozen Terror", "Frozen", "Full Metal", "Full Machine", "Piltover Customs", "Robot", 
	"Galactic", "Gentleman", "Archduke", "Order of the Banana", "Glacial", "God", "Risen", "Guardian of the Sands", "Haunted", "Haunting", 
	"Headhunter", "Headmistress", "Heartseeker", "Heartpiercer", "Hot Mess Martin", "Sweetheart", "Heartbreaker", "Hextech", "High Noon", 
	"Ace of Spades", "King of Clubs", "Wild Card", "Queen of Diamonds", "Jack of Heartseeker", "Hired Guardian", "Minuteman", "Waterloo", 
	"Ice Drake", "Ice King", "Divine Sword", "Soaring Sword", "Sacred Sword", "Eternal Sword", "Enduring Sword", "Imperial", "Infernal", "IG", 
	"Lancer Zero", "Lancer Rogue", "Lancer Paragon", "Lancer Stratus", "Lunar", "Jurassic", "Justicar", "El Macho", "K/DA", "Popstar", 
	"Mad Scientist", "Mafia", "Gangster", "Marauder", "Mecha", "Royal Guard", "Musketeer", "Champ Name", "Nightmare", "Northern", "Noxus", 
	"Odyssey", "Officer", "Omega Squad", "Order of the Lotus", "Panda", "Papercraft", "PAX", "NEO PAX", "Pentakill", "Pharaoh", "Iron Inquisitor", 
	"Cursed Revenant", "Black Scourge", "Undertaker", "Pool Party", "Praetorian", "Prehistoric", "Program", "PROJECT", "Prom King", "Prom Queen", 
	"Pulsefire", "Pumpkinhead", "Headless", "Reaper", "Lionheart", "Rugged", "RPG", "Demolisher", "Swift", "Riot", "Royal", "Rune", "Sandstorm", 
	"Santa", "Secret Agent", "Scorched", "SKT T1", "Slayer", "Cut", "Snow Day", "Snowstorm", "Soccer", "Soulstealer", "Special Forces", 
	"Special Weapon", "SSG", "SSW", "Star Guardian", "Pajama Guardian", "Steel Legion", "Super Galaxy", "Neon", "Surprise Party", "Tango", "Toy", 
	"TPA", "Tundra", "Underworld", "URF", "Valkyrie", "Dark Valkyrie", "Vandal", "Victorious", "Void", "Warden", "Warring Kingdoms", 
	"Opera(web browser theme)", "Edge(web browser theme)", "Wicked", "Winter Wonder", "Woad", "Woad King", "Woad Queen", "Worldbreaker", 
	"Worldweaver", "Zombie"
];
var skin = skinS[Math.floor(Math.random()*skinS.lenght)];
return skin;
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
function iRandom_random_rgba() {//red green blue
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
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
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