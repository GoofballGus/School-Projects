const data = {
	"Mercury": {
		"name": "Mercury",
		"moons": 0,
		"velocity": "47",
		"distance": "58",
		"description": "Mercury is the closest planet to the Sun. It has no moons and orbits the Sun faster than any other planet. Because of its small size and brightness of the Sun, it's best seen during sunrise or sunset."
	},
	"Venus": {
		"name": "Venus",
		"moons": 0,
		"velocity": "35",
		"distance": "108",
		"description": "Venus is the second planet from the Sun and similar in size to Earth. It's covered by thick clouds of acid and is the hottest planet in our solar system due to a strong greenhouse effect."
	},
	"Earth": {
		"name": "Earth",
		"moons": 1,
		"velocity": "29",
		"distance": "149",
		"description": "Earth is the third planet from the Sun and the only known planet to support life. It has one moon and is about 70% covered in water."
	},
	"Mars": {
		"name": "Mars",
		"moons": 2,
		"velocity": "24",
		"distance": "227",
		"description": "Mars is often called the Red Planet due to its iron-rich soil. It has two small moons and is a major focus of exploration for possible past or present life."
	},
	"Jupiter": {
		"name": "Jupiter",
		"moons": 95,
		"velocity": "13",
		"distance": "778",
		"description": "Jupiter is the largest planet in the solar system and is known for its Great Red Spot, a massive storm. It's a gas giant with dozens of moons, including Ganymede—the largest moon in the solar system."
	},
	"Saturn": {
		"name": "Saturn",
		"moons": 146,
		"velocity": "9",
		"distance": "1426",
		"description": "Saturn is famous for its beautiful ring system. It's a gas giant made mostly of hydrogen and helium, and it has the most confirmed moons of any planet."
	},
	"Uranus": {
		"name": "Uranus",
		"moons": 27,
		"velocity": "6",
		"distance": "2870",
		"description": "Uranus is unique because it rotates on its side. It's a cold, icy giant with a faint ring system and a blue-green color due to methane in its atmosphere."
	},
	"Neptune": {
		"name": "Neptune",
		"moons": 14,
		"velocity": "5",
		"distance": "4498",
		"description": "Neptune is the farthest planet from the Sun. It's a dark, windy world with the fastest winds in the solar system and is known for its deep blue color."
	},
	"Sun": {
		"name": "Sun",
		"moons": 0,
		"velocity": "220",
		"distance": "0",
		"description": "The Sun is a giant ball of hot gas at the center of our solar system. It provides light and heat to all the planets and makes life on Earth possible."
	},
	"Pluto": {
		"name": "Pluto",
		"moons": 5,
		"velocity": "4.7",
		"distance": "5906",
		"description": "Pluto is a dwarf planet located in the Kuiper Belt. It was once considered the ninth planet but was reclassified in 2006. It has a thin atmosphere and a large moon called Charon."
	}
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}


let allDivTd = document.getElementById("info").getElementsByTagName("TD");

params = new URLSearchParams(document.location.search);
planetName = params.get("planet");
console.log(planetName);

capsName = capitalizeFirstLetter(planetName);
console.log(capsName);
console.log(data[capsName]);
planet = data[capsName];

document.getElementById("info").getElementsByTagName("H1")[0].innerHTML = data[capsName].name;
document.getElementById("info").getElementsByTagName("P")[0].innerHTML = data[capsName].description;

document.getElementById("info").style.backgroundImage = `url(images/${data[planetName]}.jpg) no-repeat center center fixed`;
document.getElementById("popup image").src = `images/${planetName}.jpg`;

for(let i = 0; i < allDivTd.length; i++){
    let td = allDivTd[i];
	let id = td.id;
	let text = planet[id];
	switch (id) {
		case "velocity":
			text += " km/s";
			break;
		case "distance":
			text += " million km";
			break;
	}
    td.innerHTML = text;	
}

let popup = document.getElementById("popup");

function open_popup() {
	popup.classList.add("open-popup");
}

function close_popup() {
	popup.classList.remove("open-popup");
}
