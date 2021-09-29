$("#currentDay").text(moment().format("dddd, MMMM, Do"))
var currentTime = moment().hours()

/*
1. Use save button to grab value of text area
2. Save in local storage 
3. Get from local storage
4. Set the value saved in local storage in text area
5. Create conditional to know what time it is so that we color code (CSS)
*/

$(".saveBtn").on("click", function(){
    var textValue = $(this).siblings(".textValue").val()

    var divKey = $(this).parent().attr("id")
    localStorage.setItem(divKey, textValue)
})

$("#9 .textValue").val(localStorage.getItem("9"))
$("#10 .textValue").val(localStorage.getItem("10"))
$("#11 .textValue").val(localStorage.getItem("11"))
$("#12 .textValue").val(localStorage.getItem("12"))
$("#13 .textValue").val(localStorage.getItem("13"))
$("#14 .textValue").val(localStorage.getItem("14"))
$("#15 .textValue").val(localStorage.getItem("15"))
$("#16 .textValue").val(localStorage.getItem("16"))
$("#17 .textValue").val(localStorage.getItem("17"))

function updateCss() {
    $("timeDiv").each(function() {
        var divId = $(this).attr("id")
        
        if (currentTime === divId) {
            $(this).addClass("present")
        } else if (currentTime <= divId) {
            $(this).add("past")
        } else {
            $(this).addClass("future")
        }

    })
}




