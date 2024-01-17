/*
    Exercise 8:
    Given 5 positive integers, find the minimum and maximum values
    that can be calculated by summing exactly four of the five integers.

    Then print the respective minimum and maximum values as a single line
    of two space-separated long integers.

    Example:

        arr = [1,3,5,7,9]

        the minimum sum is 1+3+5+7 = 16
        the maximum sum is 3+5+7+9 = 24

    So, the function prints: 16 24
*/
/*
function miniMaxSum(arr){
    let min = arr.shift();
    let max = arr.pop();
    let sum = 0;

    for(let i = 0; i < arr.length; i++)
        sum += arr[i];

    min += sum;
    max += sum;

    console.log(min+" "+max);
}
*/
function miniMaxSum(arr) {
    const sum = arr.reduce((acumulador, elemento_actual) => acumulador + elemento_actual);
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);

    console.log(min + " " + max);
}

let a = [1,2,3,4,5];

miniMaxSum(a)