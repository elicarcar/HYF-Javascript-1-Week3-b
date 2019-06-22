const fourInOne = () => {
//ARRAY MANIPULATION
const removingThree = () => {
const arrayOfNumbers = [5, 3, 2, 9, 19, 20, 3, 5];
for (let i = 0; i < arrayOfNumbers.length; i++){
    if( arrayOfNumbers[i] === 3) {
      arrayOfNumbers.splice(i, 1);
   };
}
arrayOfNumbers.push(100);
return arrayOfNumbers;
}
console.log(removingThree());



//OBJECT FUN
const pets = [{
name: "Cat",
weight: "2.5kg",
sound: "Meow!",
},
{
name: "Cow",
weight: "200kg",
sound: "Moo!",
},
{
name: "Dog",
weight: "5kg",
sound: "Woof woof!",
},
{
name: "Bird",
weight: "0.5kg",
sound: "Chirp chirp!",
}];

//I know that this one below is not the best solution
//But i tried not to use return since it was one of the main challenge in this task
pets.forEach(function(pet) {
        console.log( pet.name+" : "+pet.sound);
});





//CONDITIONALS
const reverseNum = () => {
for(i = 200; i > 1; i--){
    if(i % 3 == 0){
        console.log(i);
    };
}
}
reverseNum();


//STRING MANIPULATION
const removingString = () => {
let sentence = 'Hello, it is a good day, I eat good bananas, I do not like the word good'
let word = /good/gi;
return sentence.replace(word, '');
}
console.log(removingString());
}

fourInOne();








