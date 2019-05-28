
window.addEventListener('load', function () {
    play8();
});


function play8() {
    console.info("play8.js");
    //Sets current play to highlighted blue
    loadPrevTimes(8);
    highlight(8);
    buildPlay8();
    addListeners();
    resestClicks();
    timerStart();
}

function buildPlay8() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "red");
    spot1("svgEnd", "cyan");
    spot2("svgHome", "red");
    spot2("svgEnd", "red");
    spot3("svgHome", "green");
    spot3("svgEnd", "red");
    spot4("svgHome", "red");
    spot4("svgEnd", "cyan");

    spot5("svgHome", "cyan");
    spot5("svgEnd", "cyan");
    spot6("svgHome", "red");
    spot6("svgEnd", "cyan");
    spot7("svgHome", "green");
    spot7("svgEnd", "red");
    spot8("svgHome", "cyan");
    spot8("svgEnd", "green");

    spot9("svgHome", "red");
    spot9("svgEnd", "cyan");
    spot10("svgHome", "red");
    spot10("svgEnd", "red");
    spot11("svgHome", "cyan");
    spot11("svgEnd", "red");
    spot12("svgHome", "green");
    spot12("svgEnd", "red");

    spot13("svgHome", "green");
    spot13("svgEnd", "green");

}


function play8advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 8);
    var clicks = getNumClicks();
    setClicks(clicks, 8);
    scores();
    goToNext(9);
}
