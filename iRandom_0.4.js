/* RANDOM NUMBERS IN DECIDED RANGE */
function randomRange(min, max) {

if (min.length === 2 && max.length === 2) {
	if (min[0] === "include" && max[0] === "include") {
		rrangeIi = Math.floor(Math.random() * (max[1] - min[1] + 1) ) + min[1];
		return rrangeIi;
	}
	else if (min[0] === "include" && max[0] === "exclude") {
		rrangeIe = Math.floor(Math.random() * (max[1] - min[1]) ) + min[1];
		return rrangeIe;
	}
	else if (min[0] === "exclude" && max[0] === "include") {
		rrangeEi = Math.floor(Math.random() * (max[1] - min[1] + 1) ) + min[1];
		if (rrangeEi == min[1]) rrangeEi++;
		return rrangeEi;
	}
	else {/*   min[0] === "exclude" && max[0] === "exclude"   */
		rrangeEe = Math.floor(Math.random() * (max[1]-min[1]) + min[1]);
		if (rrangeEe == min[1]) rrangeEe++;
		return rrangeEe;
	}
}
/*else {
	console.log("[\"include\" / \"exclude\", num(eg. 4)], [\"include\" / \"exclude\", num(eg. 27)]");
}*/
}

/* RANDOM RANGE FOR MIN RANGE - CAN USE IN randomRange FUNCTION */
function minRange(min1, min2) {

if (min1.length === 2 && min2.length === 2) {
	if (min1[0] === "include" && min2[0] === "include") {
		mrangeIi = Math.floor(Math.random() * (min2[1] - min1[1] + 1) ) + min1[1];
		return mrangeIi;
	}
	else if (min1[0] === "include" && min2[0] === "exclude") {
		mrangeIe = Math.floor(Math.random() * (min2[1] - min1[1]) ) + min1[1];
		return mrangeIe;
	}
	else if (min1[0] === "exclude" && min2[0] === "include") {
		mrangeEi = Math.floor(Math.random() * (min2[1] - min1[1] + 1) ) + min1[1];
		if (mrangeEi == min1[1]) mrangeEi++;
		return mrangeEi;
	}
	else {/*   min1[0] === "exclude" && min2[0] === "exclude"   */
		mrangeEe = Math.floor(Math.random() * (min2[1]-min1[1]) + min1[1]);
		if (mrangeEe == min1[1]) mrangeEe++;
		return mrangeEe;
	}
}
}

/* RANDOM RANGE FOR MAX RANGE - CAN USE IN randomRange FUNCTION */
function maxRange(max1, max2) {

if (max1.length === 2 && max2.length === 2) {
	if (max1[0] === "include" && max2[0] === "include") {
		MrangeIi = Math.floor(Math.random() * (max2[1] - max1[1] + 1) ) + max1[1];
		return MrangeIi;
	}
	else if (max1[0] === "include" && max2[0] === "exclude") {
		MrangeIe = Math.floor(Math.random() * (max2[1] - max1[1]) ) + max1[1];
		return MrangeIe;
	}
	else if (max1[0] === "exclude" && max2[0] === "include") {
		MrangeEi = Math.floor(Math.random() * (max2[1] - max1[1] + 1) ) + max1[1];
		if (MrangeEi == max1[1]) MrangeEi++;
		return MrangeEi;
	}
	else {/*   max1[0] === "exclude" && max2[0] === "exclude"   */
		MrangeEe = Math.floor(Math.random() * (max2[1]-max1[1]) + max1[1]);
		if (MrangeEe == max1[1]) MrangeEe++;
		return MrangeEe;
	}
}
}

/* execute function 100 times
for (var i=0; i<100; i++) {
			console.log(
			randomRange(["include", minRange(["include", 10], ["exclude", 15])], ["include", maxRange(["exclude", 30], ["exclude", 50])]))
			;
		}   */
		
/* __--__--__--__ */





/*   MIN/MAX INCLUDE/EXCLUDE , SKIP   */


/* Generates random number in range between min and max , both min and max is included , and third parameter is skipped */
function iRandom_range_MMs(min, max, skipMMs) {
    MMs = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (MMs >= skipMMs) MMs++;
    return MMs;
}

/* Generates random number in range between min and max , min is included , max is excluded , and third parameter is skipped */
function iRandom_range_Mms(min, max, skipMms) {
	Mms = Math.floor(Math.random() * (max - min) ) + min;
	if (MMs >= skipMMs) MMs++;
    return MMs;	
}

/* Generates random number in range between min and max , both min and max is excluded , and third parameter is skipped */
function iRandom_range_mms(min, max, skipmms) {
    mms = Math.floor(Math.random() * (max-min) + min);
    if (mms == min) mms++;
    if (mms >= skipmms) mms++;
	return mms;
}

/* Generates random number in range between min and max , min is excluded , and max is included , and third parameter is skipped */
function iRandom_range_mMs(min, max, skipmMs) {
  mMs = Math.floor(Math.random() * (max - min + 1) ) + min;
  if (mMs == min) mMs++;
  if (mMs == skipmMs) mMs++;
  return mMs;
}





/*   _?_   */

/* Generate random characters in length you decide */
function iRandom_charactersAll(length) {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

/*  Generate random numbers in lenght you decide  */
function iRandom_charactersNums(length) {
   let result = '';
   let characters = '0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

/*  Generate random uppercase letters , in lenght you decide  */
function iRandom_charactersUletters(length) {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

/*  Generate random lowercase letters , in lenght you decide  */
function iRandom_charactersLletters(length) {
   let result = '';
   let characters = 'abcdefghijklmnopqrstuvwxyz';
   let charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


/*  Generate random letters , in lenght you decide  */
function iRandom_charactersULletters(length) {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   let charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

/* CAST */

function Str(x) {
	x.toString()
}

function str_float_to_int(x) {
	parseInt(x);
	return x;
}

function int_to_float(num, decPlaces) { 
return num.toFixed(decPlaces);
}

function str_to_number(x) {
	Number(x);
	return x;
}

function str_to_float(x) {
	parseFloat(x);
	return x;
}

function iRandom_emotions() {
	var emotionS = [
	"Love", "Affection", "Adoration", "Affection", "Love", "Fondness", "Liking", "Attraction", "Caring", "Tenderness", "Compassion", "Sentimentality", "Lust", "Arousal", "Desire", "Lust", "Passion", "Infatuation", "Longing", "Longing", "Joy", "Cheerfulnes", "Amusement", "Bliss", "Cheerfulness", "Gaiety", "Glee", "Jolliness", "Joviality", "Joy", "Delight", "Enjoyment", "Gladness", "Happiness", "Jubilation", "Elation", "Satisfaction", "Ecstasy", "Euphoria", "Zest", "Enthusiasm", "Zeal", "Zest", "Excitement", "Thrill", "Exhilaration", "Contentment", "Contentment", "Pleasure", "Pride", "Pride", "Triumph", "Optimism", "Eagerness", "Hope", "Optimism", "Enthrallment", "Enthrallment", "Rapture", "Relief", "Relief", "Suprise", "Suprise", "Amazement", "Suprise", "Astonishment", "Anger", "Irritation", "Aggravation", "Irritation", "Agitation", "Annoyance", "Grouchiness", "Grumpiness", "Exasperation", "Exasperation", "Frustration", "Range", "Anger", "Range", "Outrage", "Fury", "Wrath", "Hostility", "Ferocity", "Bitterness", "Hate", "Loathing", "Scorn", "Spite", "Vengefulness", "Dislike", "Resentment", "Disgust", "Disgust", "Revulsion", "Contempt", "Envy", "Envy", "Jealousy", "Torment", "Torment", "Sadness", "Suffering", "Agony", "Suffering", "Hurt", "Anguish", "Sadness", "Depression", "Despair", "Hopelessness", "Gloom", "Glumness", "Sadness", "Unhappiness", "Grief", "Sorrow", "Woe", "Misery", "Melancholy", "Disappointment", "Dismay", "Disappointment", "Displeasure", "Shame", "Guilt", "Shame", "Regret", "Remorse", "Neglect", "Alienation", "Isolation", "Neglect", "Loneliness", "Rejection", "Homesickness", "Defeat", "Dejection", "Insecurity", "Embarrassment", "Humiliation", "Insult", "Sympathy", "Pity", "Sympathy", "Fear", "Horror", "Alarm", "Shock", "Fear", "Fright", "Horror", "Terror", "Panic", "Hysteria", "Mortification", "Nervousness", "Anxiety", "Nervousness", "Tenseness", "Uneasiness", "Apprehension", "Worry", "Distress", "Dread"
	];
var emotion = emotionS[Math.floor(Math.random()*emotionS.length)];
return emotion;
}


function iRandom_LoL_champions_random() {
	lolchampions = [
	"Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion_Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho_Gath", "Corki", "Darius", "Diana", "Dr_Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan_IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai_Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha_Zix", "Kindred", "Kled", "Kog_Maw", "LeBlanc", "Lee_Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master_Yi", "Miss_Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu_&_Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek_Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm_Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted_Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel_Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin_Zhao", "Yasuo", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"
	];
	
}

function iRandom_LoL_skins_random() {
	lolskins = [
	"Academy", "Professor", "Arcade", "Battle Boss", "Arclight", "Arctic Ops", "Arctic Warfare", "Battlecast", "Resistance", "Creator", "Beast Hunter", "Bewitching", "Little Devil", "Little Angel", "Bewitching", "Bilgewater", "Blood Moon", "Blood Stone", "Sea Hunter", "Rogue Admiral", "Ironside", "Corsair", "Butcher", "Dark Candy", "Candy King", "Candy Cane", "Candy Queen", "Captain", "Challenger", "Conqueror", "Championship", "Forsaken", "Chosen", "Commando", "Cosmic Queen", "Dark Cosmic", "Cosmic Reaver", "Cosmic Enchantress", "Cosmic Blade", "Cosmic Dawn", "Cosmic Dusk", "Cosmic Defender", "Cosmic", "Cottontail", "Coven", "Safecracker", "Pickpocket", "Crimson Elite", "Sashimi", "Bird", "Barbecue", "Sinful Succulence", "Sinful", "Butcher", "Baker", "Butcher", "Pizza Delivery", "Master Chef", "Dark Star", "Dark Waters", "Dawnbringer", "Nightbringer", "Death Blossom", "Death Sworn", "Debonair", "Mythical", "Scuba", "Deep Sea", "Deep Terror", "Definitely Not", "Demacia Vice", "Dragonblade", "Dragonslayer", "Dragon Master", "Dragon Sorceress", "Dragon Trainer", "Dragon", "Dreadknight", "Dreadnova", "Dunkmaster", "Ambitious Elf", "Happy Elf", "Earnest Elf", "Angry Elf", "Jealous Elf", "Elf", "Elderwood", "Dryad", "Emerald", "Ruby", "Sapphire", "Topaz", "Eternum", "Fnatic", "Freljord", "Frostfire", "Blackfrost", "Frosted", "Frostblade", "Frost Queen", "Frost King", "Frozen Prince", "Frozen Princess", "Frozen Terror", "Frozen", "Full Metal", "Full Machine", "Piltover Customs", "Robot", "Galactic", "Gentleman", "Archduke", "Order of the Banana", "Glacial", "God", "Risen", "Guardian of the Sands", "Haunted", "Haunting", "Headhunter", "Headmistress", "Heartseeker", "Heartpiercer", "Hot Mess Martin", "Sweetheart", "Heartbreaker", "Hextech", "High Noon", "Ace of Spades", "King of Clubs", "Wild Card", "Queen of Diamonds", "Jack of Heartseeker", "Hired Guardian", "Minuteman", "Waterloo", "Ice Drake", "Ice King", "Divine Sword", "Soaring Sword", "Sacred Sword", "Eternal Sword", "Enduring Sword", "Imperial", "Infernal", "IG", "Lancer Zero", "Lancer Rogue", "Lancer Paragon", "Lancer Stratus", "Lunar", "Jurassic", "Justicar", "El Macho", "K/DA", "Popstar", "Mad Scientist", "Mafia", "Gangster", "Marauder", "Mecha", "Royal Guard", "Musketeer", "Champ Name", "Nightmare", "Northern", "Noxus", "Odyssey", "Officer", "Omega Squad", "Order of the Lotus", "Panda", "Papercraft", "PAX", "NEO PAX", "Pentakill", "Pharaoh", "Iron Inquisitor", "Cursed Revenant", "Black Scourge", "Undertaker", "Pool Party", "Praetorian", "Prehistoric", "Program", "PROJECT", "Prom King", "Prom Queen", "Pulsefire", "Pumpkinhead", "Headless", "Reaper", "Lionheart", "Rugged", "RPG", "Demolisher", "Swift", "Riot", "Royal", "Rune", "Sandstorm", "Santa", "Secret Agent", "Scorched", "SKT T1", "Slayer", "Cut", "Snow Day", "Snowstorm", "Soccer", "Soulstealer", "Special Forces", "Special Weapon", "SSG", "SSW", "Star Guardian", "Pajama Guardian", "Steel Legion", "Super Galaxy", "Neon", "Surprise Party", "Tango", "Toy", "TPA", "Tundra", "Underworld", "URF", "Valkyrie", "Dark Valkyrie", "Vandal", "Victorious", "Void", "Warden", "Warring Kingdoms", "Opera(web browser theme)", "Edge(web browser theme)", "Wicked", "Winter Wonder", "Woad", "Woad King", "Woad Queen", "Worldbreaker", "Worldweaver", "Zombie"
];

}


function iRandom_random_hex() {
	hexVal = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	return hexVal;
}



function iRandom__random_rgba() {//red green blue
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
	
	/*for (var i=0; i<10; i++) {//output 10 results in console
    console.log(random_rgba()) 
}*/
}


function iRandom_random_hsl() {//hue, saturnation, lightness
	var rRound = Math.round, rRandom = Math.random, myhue = 360, mysaturnation = 100, mylightness = 100;
	return 'hsl(' + rRound(rRandom()*myhue) + ', ' + rRound(rRandom()*mysaturnation) + '%' + ', ' + rRound(rRandom()*mylightness) + '%' + ')';
}


function iRandom_hwb() {//hue , whiteness, blackness   //CSS4
	var rRound = Math.round, rRandom = Math.random, myhue = 360, mywhiteness = 100, myblackness = 100;
	return 'hsl(' + rRound(rRandom()*myhue) + ', ' + rRound(rRandom()*mywhiteness) + '%' + ', ' + rRound(rRandom()*myblackness) + '%' + ')';
}

function iRandom_cmyk() {//cyan, magenta, yellow, black   //CSS4
	var rRound = Math.round, rRandom = Math.random, mycyan = 100, mymagenta = 100, myyellow = 100, myblack = 100;
	cyanShort = rRound(rRandom()*mycyan) + '%';
	magentaShort = rRound(rRandom()*mymagenta) + '%';
	yellowShort = rRound(rRandom()*myyellow) + '%';
	blackShort = rRound(rRandom()*myblack) + '%';
	return 'cmyk(' + cyanShort + ', ' + magentaShort + ', ' + yellowShort + ', ' + blackShort + ')';
}


/* FULLSCREEN API*/
//Enter in fullscreen when Enter key is pressed
function EnTer_key_fullscreen_enter() {
document.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    toggleFullScreen();
  }
}, false);
}

//toggle
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}


/*KEY CODES */   //https://keycode.info/

















