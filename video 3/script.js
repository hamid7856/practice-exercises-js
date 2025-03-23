//----------loops basic structure---------

// for ( let count=1; count <= 5; count++){
//     console.log("Count is ", count); 
// }

// let i = 1;
// while(i <=10){
//     console.log("i= ", i);
//     i++;
// }


//--------------------DO WHILE LOOP----------------

// let i = 1;
// do {
//     console.log("Value of i = ", i)
//     i++;
// } while (i <=20);

//PRINT EVEN NUMBERS FROM 1 TO 100

// for (let i =1; i<=100; i++){
//     if (i % 2=== 0) {
//         console.log("i= ", i)   
//     }    
// }

//Practice Q2 Game number guessing 
// let GameNum = 25;
// let UserGuess = prompt ("Guess any number");
// console.log("You entered = ", UserGuess);
// while(UserGuess != GameNum){
//     UserGuess=prompt("You entered incorrect number, Guess again")

// } console.log("Congrats!!!");

//completed till loops time is 3:10:00 started new topic that is strings

// making a username exercise 

let FullName = prompt(`Enter your full name`);
let start = `@`;
// console.log(FullName.length);

console.log(`Your username is ${start}${FullName}${FullName.length}`);

