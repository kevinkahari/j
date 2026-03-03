let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(names[4]);
names.push("Frank"); //adds a new element to the end of the array
console.log(names);
names.pop(); //removing the last element in the array
console.log(names);

console.log(names[0]);

names.unshift("Grace"); //adds a new element to the beginning of the array
console.log(names);

// names.shift(); //removing the first element in the array
console.log(names[0]);

names.includes("Charlie"); //returns true if the array contains the specified element
console.log(names.includes("Charlie"));
names.indexOf("David"); //returns the index of the first occurrence of the specified element
console.log(names.indexOf("David"));


//check what below arrays methods do and how they work
// reverse(), 
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
numbers.sort(); //sorts the elements of the array in place and returns the sorted array
console.log(numbers);

// 
//sort(), slice(), splice(), concat(), join(), map(), filter(), reduce(),  toString(), valueOf()

// check the sort methods, search methods, iteration methods, array reference methods.
//create one array and apply the methods i.e. sort methods, search methods etc 






//sort methpds include .....Array.prototype.sort() - sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements as strings in ascending order. You can also provide a compare function to specify the sorting order.
let ages = [25, 30, 18, 22, 35];
ages.sort((a, b) => a - b);
console.log(ages);




//search methods include...includes() ---- gives true or false values to show wheter a value actally exists  ---- , indexOf()----finds a value through its position for example searching for person n index 4------// , findIndexOf()---finds index of first item matching custom condition---,find()---finds value matching a custom condition---, filter()---find all elements matching a condition ---, some()---chechs if atleast one element matches a conditiion ---, every()

let names2 = ["james", "tom", "calvin", "pete", "alex"];
console.log(names2);
sortedNames = names2.sort();
console.log(sortedNames);
includestom = names2.includes("tom");
console.log(includestom);
indexOfpete = names2.indexOf("pete");
console.log(indexOfpete);

const numberSearch = [10, 20 , 30 , 40 , 50 , 60];
console.log("indexOf 20: ", numberSearch.indexOf(20));
console.log("indexOf 20 from index 2 ", numberSearch.indexOf(20, 2));
console.log("indexOf 100: ", numberSearch.indexOf(100)); //returns -1 if the element is not found in the array

// create an array with 20 numbers and filter out the prime numbers from the array and print the prime numbers in the console 

let number3 = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log("Original array:", number3);


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const primes = number3.filter(isPrime);
console.log("Prime numbers:", primes);