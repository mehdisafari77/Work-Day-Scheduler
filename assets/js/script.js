$("#currentDay").text(moment().format("dddd, MMMM, Do"))
var currentHour = moment().hours()

/*
1. Use save button to grab value of text area
2. Save in local storage 
3. Get from local storage
4. Set the value saved in local storage in text area
5. Create conditional to know what time it is so that we color code (CSS)
*/
