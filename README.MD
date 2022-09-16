Granify Junior Developer Assessment
==============================================

This exercise is designed to assess how you approach tasks required in your position as a junior developer at Granify. This assignment helps us assess your programming abilities. Your mission, should you choose to accept it, is to complete the tasks below and return your completed files to us as soon as possible. Good luck!

### Compatible and tested with Node v16.15.1.

### To install
yarn install

### To run script
yarn start

### To run tests
yarn test

### Directory and file structure

In order to differentiate the function and purpose of each file they have been categorized and divided into three subdirectories. 

1. animals - A collection of animal constructor classes
   
2. __tests__ - All tests pertaining to all files (currently only 1 test file exists for Cat.js).
   
3. server - All files related to SQL server and misc data files.

### Discussions

### Cat Class

For the Cat class only two constructor arguments were chosen (initialName and favoriteFood) as on instaniation the other values would be automatically assigned.

The name property would automatically be assigned to the initialName value and the age would be a random number generator between 5 to 10. 

### initialName ternary operator

The initialName is pushed into the allNames array for storage under the condition that it is not undefined. If a value is assigned only then will it push into the allNames array.

### setName method

The setName method pushes the new name into the allNames array before setting the new name as the current name.

### speak method

Upon callin the speak method the speakCounter a value of 1 is added immediately before the rest of the method executes. A condition is perform after which states if the speakCounter number is not 0 and has a result of 0 when performing a modulus operation of 5. Only then will the age go up by 1 and the speakCounter reset to 0.

This could have been syntactically shortened to say if the counter reaches 5.

A ternary operator is performed at the end if the argument is provided it is console logged else the default "Meow" is performed.

### getNames method

Upon execution this method loops through all the names within the allNames array and console logs the outputs.

### getAverageNameLength method

Loops through all the names and adds the length of each name to a total. Upon completion it outputs the average.

### SQL section

The pets table incorporates all the columns of all pets, I have created another column called `species` that is restricted with a constraint that only allowed 'cat' or 'dog'.

Another table has been created for pastnames this table will include all pastnames of all pets and usings a foreign key of petid which references the petid of the `pets` table. MULTIPLE NAMES can be associated with 1 petid.

### petShop section

For the savePetShop function as the extended length of the operation simple for loops were used to create 3 dog and 3 cat instaniations which were directly inserted into our pseudo database.

### Testings

Jest was used as the library for testing. 

### Dependencies
------------
[YARN](https://docs.npmjs.com/cli/npm) Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered. (Alternatively NPM can be used.)

[JEST](https://jestjs.io/docs/getting-started) Jest is a JavaScript testing framework built on top of Jasmine and maintained by Meta. It was designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js and Svelte.
