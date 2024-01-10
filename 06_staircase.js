/*
    Exercise 7:

    This is a staircase of size n = 4
    
           *
          ***
         *****
        *******
    Complete the staircase function in the editor below.
    staircase has the following parameter:

        int n: an integer
    
    Print a staircase as described above.
*/

function staircase(n, def = 1){
    if (def > n)
        return

    console.log("-".repeat(n-def)+"#".repeat(def)+"-".repeat(n-def));
    staircase(n, def+1);
}

staircase(5);