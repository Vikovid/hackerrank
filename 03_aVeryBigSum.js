/*
    Exercise 4:
    In this challenge, you are required to calculate and print
    the sum of the elements in an array, keeping in the mind that
    some of those integers may be quite large.

    Complete a 'aVeryBigSum' function in the editor below. It must
    return the sum of all array elements.
    'aVeryBigSum' has the following parameter

        - int ar[n]: an array of integers.
    
    Return:
        long: the sum of all array elements.
*/

function aVeryBigSum(ar) {
    let sum = BigInt(0);

    for (let i = 0; i < ar.length; i++) {
        sum += BigInt(ar[i]);
    }

    return sum;
}

let ar = [1000000001,1000000002,1000000003,1000000004,1000000005];

console.log(aVeryBigSum(ar));