/*
    Exercise 6:
    Given an array of integers, calculate the ratios of its elements
    that are positive, negative, and zero. Print the decimal value of
    each fraction on a nwe  line with 
    places after the decimal.

    Example
    arr = [1,1,0,-1,-1]

    There are n = 5 elements, two positive, two negative and one zero.
    Their ratios are 2/5, = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000
    Then, the results are printed as:

        0.400000
        0.400000
        0.200000
 */
function plusMinus(arr) {
    let res = [0,0,0], i = 0;
            
    while(i < arr.length){
        if (arr[i] > 0)
            res[0] += 1;
        else if (arr[i] < 0)
            res[1] += 1;
        else
            res[2] += 1;
        i++;
    }
        
    res = res.map((a)=> (a/arr.length).toFixed(6));
        
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
}

let arr = [-4,3,-9,0,4,1];
plusMinus(arr);