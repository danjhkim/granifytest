const Cat = require('../animals/Cat.js');
const { afterEach } = require('jest-circus');

describe('Testing Cat Class', () => {
	afterEach(() => {
		// Clear all instances and calls to constructor and all methods:
		Cat.mockClear();
	});

	test('expects make sure getName is a method/function', () => {
		const cat = new Cat();

		expect(typeof cat.getName).toBe('function');
	});

	test('expects getName() returns undefined when called', () => {
		const cat = new Cat();

		expect(cat.getName()).toBeUndefined();

		const cat2 = new Cat('catty');

		expect(cat2.getName()).toBe('catty');
	});

	test('expects getAge() returns a number between 5 to 10', () => {
		const cat = new Cat();

		expect(cat.getAge()).toBeGreaterThanOrEqual(5);
		expect(cat.getAge()).toBeLessThanOrEqual(10);
	});
	test('expects speak() returns Meow or entered string argument', () => {
		const cat = new Cat();

		//mocking a function
		console.log = jest.fn();

		//cat speaks twice
		cat.speak();
		cat.speak('Arf');

		expect(console.log.mock.calls[0][0]).toBe('Meow');
		expect(console.log.mock.calls[1][0]).toBe('Arf');
	});
	test('expects speakCounter should raise by 1 every speak and speak is string argument', () => {
		const cat = new Cat();
		const setRuleSpy = jest.spyOn(cat, 'speak');

		cat.speak('hiss');

		expect(setRuleSpy).toHaveBeenCalledWith('hiss');

		cat.speak();

		setRuleSpy.mockClear();
	});

	test('expects 5 speaks should raise age by 1', () => {
		const cat = new Cat();
		let originalAge = cat.getAge();

		cat.speak();
		cat.speak();
		cat.speak();
		cat.speak();
		cat.speak();

		expect(cat.getAge()).toBe(++originalAge);
	});

	test('expects speaks increase the speakCounter by 1 each time', () => {
		const cat = new Cat();

		cat.speak();
		expect(cat.speakCounter).toBe(1);
		cat.speak();
		expect(cat.speakCounter).toBe(2);
		cat.speak();
		expect(cat.speakCounter).toBe(3);
		cat.speak();
		expect(cat.speakCounter).toBe(4);
		cat.speak();
		expect(cat.speakCounter).toBe(0);
	});

	test('expects setAge() sets age to 20 and getAge() returns that value', () => {
		const cat = new Cat();
		cat.setAge(20);

		expect(cat.getAge()).toBe(20);
	});

	test('expects inital name then change to setName', () => {
		const cat = new Cat('catty', 'sushi');

		expect(cat.getName()).toBe('catty');

		//set abunch of names
		cat.setName('timmy');
		cat.setName('felix');
		cat.setName('meowth');

		//last name set sould be returned
		expect(cat.getName()).toBe('meowth');
	});

	test('expects list all previous names with getNames', () => {
		const cat = new Cat('catty', 'sushi');

		//set abunch of names
		cat.setName('timmy');
		cat.setName('felix');
		cat.setName('meowth');

		console.log = jest.fn();
		cat.getNames();

		//array should entail all previous names
		expect(console.log.mock.calls[0][0]).toBe('catty');
		expect(console.log.mock.calls[1][0]).toBe('timmy');
		expect(console.log.mock.calls[2][0]).toBe('felix');
		expect(console.log.mock.calls[3][0]).toBe('meowth');
	});

	test('expects average length of names outputs correct average', () => {
		const cat = new Cat('a', 'sushi');

		//set abunch of names
		cat.setName('bb');
		cat.setName('ccc');
		cat.setName('ddd');

		console.log = jest.fn();
		cat.getAverageNameLength();
		// 9 total letters divided by 4 = 2.25 expected
		expect(console.log.mock.calls[0][0]).toBe(2.25);
	});
});
