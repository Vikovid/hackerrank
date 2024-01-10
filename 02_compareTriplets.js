/*
    Exercise 3:
    Alice and Bob each created one problem for HackerRank. A reviewer
    rates two challenges, awarding points on a scale from 1 to 100
    for three categories: problem clarity, originality, and difficulty

    The rating for Alice's challenges is the triplet a = (a[0],a[1].a[2])
    and the rating for Bob's challenge is the triplet b = (b[0],b[1],b[2])

    The task is to find thier comparison points by comparing a[0] whith b[0],
    a[1] with b[1], and a[2] with b[2].

    - if a[i] > b[i], then Alice is awarded 1 point.
    - if a[i] < b[i], then Bob is awarded 1 point.
    - if a[i] = b[i], then neither person receives a point.

    Comparison points is the total points a person earned.
    Given 'a' and 'b' determine their perspective comparison points.
*/

function compareTriplets(a, b) {
    let result = [0,0];

    for (let i = 0; i < a.length; i++) {
        if(a[i]>b[i])
            result [0] += 1;
        else if(a[i]<b[i])
            result [1] += 1;
    }

    return result;
}

let a = [5,6,7];
let b = [3,6,10];

console.log(compareTriplets(a,b));