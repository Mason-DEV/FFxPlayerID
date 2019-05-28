
window.addEventListener('load', function () {
    play3();
});


function play3() {
    console.info("play3.js");
    //Sets current play to highlighted blue
    loadPrevTimes(3);
    highlight(3);
    buildPlay3();
    addListeners();
    resestClicks();
    timerStart();

}

function buildPlay3() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "cyan");
    spot1("svgEnd", "green");
    spot2("svgHome", "cyan");
    spot2("svgEnd", "green");
    spot3("svgHome", "cyan");
    spot3("svgEnd", "green");
    spot4("svgHome", "green");
    spot4("svgEnd", "cyan");

    spot5("svgHome", "green");
    spot5("svgEnd", "green");
    spot6("svgHome", "green");
    spot6("svgEnd", "cyan");
    spot7("svgHome", "cyan");
    spot7("svgEnd", "green");
    spot8("svgHome", "green");
    spot8("svgEnd", "green");

}

function play3advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 3);
    var clicks = getNumClicks();
    setClicks(clicks, 3);
    scores();
    goToNext(4);
}
