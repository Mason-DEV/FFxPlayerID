
window.addEventListener('load', function () {
    play4();
});


function play4() {
    console.info("play4.js");
    //Sets current play to highlighted blue
    loadPrevTimes(4);
    highlight(4);
    buildPlay4();
    addListeners();
    resestClicks();
    timerStart();


}

function buildPlay4() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "red");
    spot1("svgEnd", "green");
    spot2("svgHome", "red");
    spot2("svgEnd", "green");
    spot3("svgHome", "green");
    spot3("svgEnd", "green");
    spot4("svgHome", "red");
    spot4("svgEnd", "red");

    spot5("svgHome", "green");
    spot5("svgEnd", "red");
    spot6("svgHome", "green");
    spot6("svgEnd", "red");
    spot7("svgHome", "green");
    spot7("svgEnd", "green");
    spot8("svgHome", "red");
    spot8("svgEnd", "red");
}
function play4advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 4);
    var clicks = getNumClicks();
    setClicks(clicks, 4);
    scores();
    goToNext(5);
}
