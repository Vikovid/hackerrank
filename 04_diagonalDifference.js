/*
    Exercise 5:
    Given a square matrix, calculare the absolute difference between
    the sums of its diagonal.
    
    For example, the square matrix arr is shown down below:

        1 2 3
        4 5 6
        9 8 9
    
    the left to right diagonal = 1+5+9, The right to left diagonal
    = 3+5+9 their absoulute difference is |15-17|

    Function description:
    Complete the 'diagonalDifference' function in the editor below.
    'diagonalDifference' takes the following parameter:

        - int arr[n][m]: an array of integers.

    Return
    
        - int: the absolute diagonal difference
*/

function diagonalDifference(arr){
    let n = arr.length;
    let i = 0;
    let op = [0,0];

    while(i<n){
        op[0] += arr[i][i];
        op[1] += arr[i][n-1-i];
        i++;
    }

    return Math.abs(op[0]-op[1]);
}

let arr = [[11, 2, 4],[4, 5, 6],[10, 8, -12]];

console.log(diagonalDifference(arr));