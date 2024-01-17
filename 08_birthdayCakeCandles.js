/*
    Exercise 9:
    You are in charge of the cake for a child's birthday.
    You have decided the cake will have one candle for each year of their
    total age. They will only be able to blow out the tallest
    of the candles. Count how many candles are tallest.

    Example: 

        candles = [4,4,1,3]

        The maximum height candles are 4 units high, There are 2 of 
        them, so return 2.
*/

function birthdayCakeCandles(candles) {
    const maxCandle = Math.max(...candles);
    const repeatCandle = candles.filter( (candle) => candle === maxCandle);
    return repeatCandle.length;
}

let can = [3,2,1,3,4,4,4,4,4,4,4,4,4];
console.log(birthdayCakeCandles(can));