let myName = "Sam"; // making a variable called myName and defining it as Sam

const USStates = 51; // making a constant variable called USStates and defining it as 51

var result = (5 + 4); // making a variable thats the result of adding 5 and 4

function sayHello() {
    alert('Hello World!')
};
sayHello();

function checkAge(name, age) {
    if (age <21) {
        alert("Sorry " + name + ", you aren't old enogh to view this page!");
    }
}

// checking the below four names against the checkAge function
checkAge("Charles", 21); 
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let FavouriteVegetables = ['carrots', 'lettuce', 'broccoli'];

for(let i = 0; i < FavouriteVegetables.length; i++) {
    console.log(FavouriteVegetables[i]);
}
// in this loop, i starts at 0 and increments by 1 until it reaches the last indec of the favouriteVegatables array
// favouriteVegetables[i] accesses each vegetable in the array
// console.log(favouriteVegetables[i]) displayes the name of each vegetable in the console

let pet = {
    name: "Winston",
    breed: 'Groodle',
};
console.log(pet.name, pet.breed);

let people = [
    {name: "Trent", age: 29},
    {name: "Bryan", age: 16},
    {name: "Sam", age: 29},
    {name: "Luke", age: 28},
    {name: "Pete", age: 15}
];

for (let person of people) {
    checkAge(person.name, person.age);
}

function Getlength(word) {
    return word.length;
}

var lengthofhelloworld = Getlength('Hello World');

if (lengthofhelloworld % 2 === 0) {
    console.log('The world is nice and even!'); 
} else {
    console.log('The world is an odd place!');
}