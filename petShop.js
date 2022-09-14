const Cat = require('./animals/Cat.js');
const Dog = require('./animals/Dog.js');
const Data = require('./server/Data.js');

let data = new Data('database');

const saveTest = () => {
	let cat = new Cat('Meowth');
	data.insert('Cats', cat);

	let dog = new Dog('Nugget');
	data.insert('Dogs', dog);
};

const savePetShop = () => {
	for (let i = 0; i < 3; i++) {
		let cat = new Cat();
		data.insert('Cats', cat);
	}

	for (let i = 0; i < 3; i++) {
		let dog = new Dog();
		data.insert('Dogs', dog);
	}
};

module.exports = { saveTest, savePetShop };
