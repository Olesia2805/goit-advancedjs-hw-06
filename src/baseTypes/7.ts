/*
  Create a function (isWeekend) that takes a day of the week (from your enum)
  and returns a boolean value indicating whether it is a weekday or a weekend.
*/

enum Days{
    Monday = 'WEEKDAY',
    Tuesday = 'WEEKDAY',
    Wednesday = 'WEEKDAY',
    Thursday = 'WEEKDAY',
    Friday = 'WEEKDAY',
    Saturday = 'WEEKEND',
    Sunday = 'WEEKEND',
}

function isWeekend(weekStatus: Days): boolean{
    return weekStatus === 'WEEKEND' ? true : false;    
}

console.log(isWeekend(Days.Monday));
console.log(isWeekend(Days.Friday));
console.log(isWeekend(Days.Sunday));