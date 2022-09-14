class Cat {
	constructor(initialName, favoriteFood) {
		this.initialName = initialName;
		this.name = initialName;
		this.age = Math.floor(Math.random() * 6) + 5;
		this.favoriteFood = favoriteFood;
		this.allNames = initialName !== undefined ? [initialName] : [];
		this.speakCounter = 0;
	}

	getName() {
		return this.name;
	}

	getAge() {
		return this.age;
	}

	getFavoriteFood() {
		return this.favoriteFood;
	}

	setName(newName) {
		this.allNames.push(newName);
		this.name = newName;
	}

	setAge(newAge) {
		this.age = newAge;
	}

	setFavoriteFood(newFavoriteFood) {
		this.favoriteFood = newFavoriteFood;
	}

	speak(words) {
		++this.speakCounter;
		if (this.speakCounter !== 0 && this.speakCounter % 5 === 0) {
			this.age = ++this.age;
			this.speakCounter = 0;
		}
		words ? console.log(words) : console.log('Meow');
	}

	getNames() {
		this.allNames.forEach(name => {
			console.log(name);
		});
	}

	getAverageNameLength() {
		let totalletters = 0;

		this.allNames.forEach(item => {
			totalletters = totalletters + item.length;
		});
		let averageLength = totalletters / this.allNames.length;

		console.log(averageLength);
	}
}

module.exports = Cat;
