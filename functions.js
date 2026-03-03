//Function - ablock ()that performs a aspecific task
//some functions require inpiut (arguments/parameters )

function checkAge(year){
    let age = 2026  - year;
    if(age >=18){
        console.log("welcome to EABL");
    }else{
        console.log("you are not allowed in this website ");
    }

}

//calling/invocking the function
checkAge(2010)
checkAge(2000)

//write a function that chechs whether the input/give number is divisible 5 
function checkDivisibility(num){
    if(num % 5 === 0){
        console.log(num + " is divisible by 5");
    }else{
        console.log(num + " is not divisible by 5");
    }
}
checkDivisibility(10)

//==comparison-- allows  for type coersion
console.log(6 == 6);

// return value --- the output/result of a function

function multiplyNumbers(first ,second ,third){
    return first * second * third;
}
//the return values 
// stores the resuts in the function call (like varriables)
//write a function  that takes in a number ,reterns true is a number even and false if a number id odd
//write a function  that takes a string and reterns the number off chatracters *in the string
//write a function thatg takes an array of numbers as input , uses a for loop to calculate the avarage of the nnumbers in the array

//arrays and strings , object 