/*
    Exercise 2:
    Given an array of integers, find the sum of its elements.
    For example, if the array ar = [1,2,3], so return 6.

    Complete the 'simpleArraySum' function in the editor below.
    It must return the sum of the array elements an integer.
    'simpleArraySum' has the following parameter(s)

        ar: an array of integers
*/

function simpleArraySum(ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;
}

console.log(simpleArraySum([10,20,30,40]));