function getTimeElapsed(startDate) {
    var elapsedMs = new Date().getTime() - startDate.getTime();
    return elapsedMs;
}
function updateTimeElapsed(startDate, outputId) {
    var timeElapsedMs = getTimeElapsed(startDate);
    var timeElapsedYrs = timeElapsedMs / (1000 * 60 * 60 * 24 * 365.25);
    var formattedTimeElapsed = timeElapsedYrs.toFixed(8);
    document.getElementById(outputId).textContent = "".concat(formattedTimeElapsed, " yrs");
}
var startDate1 = new Date("September 1, 2020 00:00:00");
setInterval(function () { return updateTimeElapsed(startDate1, "timeElapsed1"); }, 100);
var startDate2 = new Date("December 1, 2022 00:00:00");
setInterval(function () { return updateTimeElapsed(startDate2, "timeElapsed2"); }, 100);
var startDate3 = new Date("August 1, 2016 00:00:00");
setInterval(function () { return updateTimeElapsed(startDate3, "timeElapsed3"); }, 100);
var timeslot = document.getElementById("timeslot");
var words = ["projects", "products", "designs", "communities", "experiences"];
function updateTimeslot() {
    var listItems = timeslot.querySelectorAll('li');
    var numItems = listItems.length;
    for (var i = 0; i < numItems - 1; i++) {
        listItems[i].textContent = listItems[i + 1].textContent;
    }
    listItems[numItems - 1].textContent = words[Math.floor(Math.random() * words.length)];
}
setInterval(updateTimeslot, 2000);
document.addEventListener('DOMContentLoaded', function (event) {
    var dataText = ["projects", "products", "designs", "communities", "experiences"];
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector("h3.typewrite").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 150);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 1000);
        }
    }
    function startTextAnimation(i) {
        i = i % dataText.length;
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function () {
                setTimeout(function () {
                    startTextAnimation(i + 1);
                }, 500);
            });
        }
    }
    setTimeout(function () {
        startTextAnimation(0);
    }, 2000);
});
