# Work-Day-Scheduler
A workday scheduler in Javascript

## Site Picture

## Deployed Link

* [See Live Site](https://mehdisafari77.github.io/Work-Day-Scheduler/)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Moment.js - For time calculation
- Bootstrap - For easier design 
- Javascript - For logic

## Summary 
A Website that is meant for users to create a daily scheduler based on the 9-5 workday time. Each block of the time will be color coded to represent Past, Present, and the Future. Usrs can write what they want in each block and save the data in their local storage.

## Javascript Code Snippet For Main Time Color Changing Logic
```javascript
 unction updateCss() {
    currentTime = moment().hours()
    $(".timeDiv").each(function() {
        var divId = $(this).attr("id")
        
        if (currentTime == divId) {
            $(this).addClass("present")
        } else if (currentTime < divId) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }
    })
}
updateCss()
```

## Author Links
[LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)
[GitHub](https://github.com/mehdisafari77)

## Acknowledgements
- W3 Schools
- YouTube (Kevin Powell FlexBox Tutorial)