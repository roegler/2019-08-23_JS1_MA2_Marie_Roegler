//MODULE ASSIGNMENT 2 - LEVEL 1
// Task 1. Create a function that displays prototypal inheritance.

function animal() {
    this.numberOfLegs = 4;
}

animal.prototype.describe = function() {
    console.log("I am a dog with " + this.numberOfLegs + " legs");
};

var someAnimal = new animal();

someAnimal.describe();

/* Task 2. Create an array of numbers from 1 – 10; slice the 5th number in the array.*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.slice(5));


/* Task 3. Delete the last number in the array that you created above.*/

array.pop();
console.log(array);

/* Task 4. Given the following paragraph, 
create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
“Strawberries are a popular part of spring and summer diets throughout America. 
Mouths water from coast to coast each spring, 
when small white blossoms start to appear on strawberry bushes. 
They announce the impending arrival of the ruby red berries that so many people crave. 
Ripe strawberries taste sweet and have only a slight hint of tartness. 
They are also one of the healthiest fruits around. 
here are countless recipes for the luscious red berry, 
but many people prefer to eat them fresh and unaccompanied.”*/

/* NOT SURE ABOUT THIS ONE...*/

function bananaStrawberry() {
    var str = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring,when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. here are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied";

    str = str
        .replace('strawberry', 'banana')
        .replace('strawberries', 'bananas')
        .replace('Strawberries', 'Bananas');
    console.log(str);
}

bananaStrawberry();

/* Task 5. Create an array and a button. The array should contain 4 football clubs names. 
When the button is clicked, remove all elements out of the array that we just created. 
There after add in 4 names of cars inside that array. 
Log it to the console.*/

var fotballClubs = ["Liverpool", "Manchester United", "Real Madrid", "FC Barcelona"];

console.log(fotballClubs);

function buttonClicked() {
    fotballClubs = [];
    fotballClubs.push('BMW');
    fotballClubs.push('Audi');
    fotballClubs.push('Porche');
    fotballClubs.push('Volvo');

    console.log(fotballClubs);
}

/*Task 6. Create an array of objects with 3 people inside it. 
Use the filter function to map by a name.*/

var person1 = {
    firstName: 'George',
    lastName: 'Olson',
    age: 53
}

var person2 = {
    firstName: 'Susan',
    lastName: 'Olson',
    age: 15
}

var person3 = {
    firstName: 'Chris',
    lastName: 'Olson',
    age: 34
}

var familyOlson = [person1, person2, person3];

var firstNames = familyOlson.map(function(person) {
    return person.firstName;
})

console.log(firstNames);


//Task 7. Create a simple function that logs the date.

function logDate() {
    var today = new Date();

    console.log(today);
}

logDate();