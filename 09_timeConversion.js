/*
    Exercise 10

    Given a time in 12-hour AM/PM format, cnovert it to millitary
    (24-hour) time. 

    Note: 
    - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

    Example:

        s = '12:01:00PM', return '12:01:00'

        s = '12:01:00AM', return '00:01:00'
    
    Complete the timeConversion function in the editor below. It 
    should return a new string representing the input time in 24 hrs.
    format.

    timeConversion has the following parameters:

        string s: a time in 12 hour format
    
    returns

        string: the time in 24 hour format
*/
    
function timeConversion(s){
    let hour = parseInt(s.slice(0,2));
    let minSeg = s.slice(3,8);
    let half = s.slice(-2);
    let newHour = '';
    
    if (half === 'PM') {
        if(hour < 12){
            hour += 12;
        } else if (hour == 12) {
            hour = '00';
        }
        newHour = hour+':'+minSeg;
    } else if (half === 'AM') {
        newHour = hour+':'+minSeg;
    } else
        throw new Error ("Invalid Format");

    return newHour;
}

function timeConversion(s) {
    let timeFormat = s.slice(-2);

    let hour = timeFormat == 'PM' && s.slice(0, 2) != '12' 
        ? parseInt(s.slice(0, 2)) + 12
        : s.slice(0, 2);

    let output = timeFormat == 'AM' && s.slice(0, 2) == '12' 
    ? s.slice(0, -2).replace(s.slice(0, 2), '00') 
    : s.slice(0, -2).replace((s.slice(0, 2)), hour.toString());
    
    return output;
}

function timeConversion(s) {
    const hour = parseInt(s.slice(0, 2));
    const minSeg = s.slice(3, 8);
    const half = s.slice(-2);
    
    const newHour = (half === 'PM' && hour < 12) ? hour + 12 : (half === 'AM' && hour === 12) ? '00' : hour;

    return newHour + ':' + minSeg;
}


let h = '05:30:00PM';
console.log(timeConversion('12:05:45AM'));