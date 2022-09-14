const Cat = require('./animals/Cat.js');
const Dog = require('./animals/Dog.js');
const Data = require('./server/Data.js');
const { saveTest, savePetShop } = require('./petShop.js');

let data = new Data('database');

let cat = new Cat();

console.log('Cat age is ' + cat.getAge());

cat.setAge(6);

cat.getAge();

cat.speak();

cat.speak('hello');

cat.setName('timmy');
cat.setName('Meowth');

cat.getNames();

cat.speak();
cat.speak();
cat.speak();

console.log(cat.getAge());

cat.getAverageNameLength();

saveTest();

savePetShop();
