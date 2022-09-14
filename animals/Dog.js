class Dog {
	constructor(initialName, favoriteFood) {
		this.initialName = undefined;
		this.name = initialName;
		this.age = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
		this.favoriteFood = favoriteFood;
		this.allNames = [initialName];
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
		this.names = newName;
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
		words ? console.log(words) : console.log('Bark!');
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

module.exports = Dog;
