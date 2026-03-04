let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8,];
function getPrimeNumbers(arr) {
    let primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
}
console.log(getPrimeNumbers(numbers));

function getSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(getSecondLargest(numbers));