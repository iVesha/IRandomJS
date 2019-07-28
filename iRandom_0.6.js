/* RANDOM NUMBERS IN DECIDED RANGE */
function randomIntRange(min, max) {
		var randomInt = Math.floor(Math.random() * (max - min + 1) ) + min;
		return randomInt;
}

function randomFloatRange(min, max) {
		var randomFloat = (Math.random() * (max - min + 1) ) + min;
		return randomFloat;
}

function percentOfNum(num, max){
	var myPercent = (num / max) * 100;
	return myPercent+'%';
}

function numberOfPercent(percent, max) {
	return var myNum = (percent / 100) * max;
}


function NName() {
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

/* execute function 100 times
for (var i=0; i<100; i++) {
	console.log(
	randomRange(randomRange(10,15), randomRange(30,50))
	);
	}; */
		
/*      */

function iRandom_range_skip(min, max, skip) {
    let rrange = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (rrange == skip) rrange++;
    return rrange;
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


function iRandom_emotions() {
	var emotionS = [
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


function iRandom_LoL_champions_random() {
	lolchampions = [
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
	
}

function iRandom_LoL_skins_random() {
	lolskins = [
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


//PYTHON random choice
function iRandom_choice(myVariable) {
	let length = 1;
	let myLength = myVariable.length;
	for ( let i = 0; i < length; i++ ) {
       myChoice = myVariable.charAt(Math.floor(Math.random() * myLength));
   }
   return myChoice;
};

