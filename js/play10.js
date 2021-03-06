window.addEventListener('load', function () {
    play10();
});


function play10() {
    console.info("play10js");
    //Sets current play to highlighted blue
    loadPrevTimes(10);
    highlight(10);
    buildPlay10();
    addListeners();
    resestClicks();
    timerStart();
}

function buildPlay10() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "red");
    spot1("svgEnd", "cyan");
    spot2("svgHome", "cyan");
    spot2("svgEnd", "cyan");
    spot3("svgHome", "red");
    spot3("svgEnd", "red");
    spot4("svgHome", "red");
    spot4("svgEnd", "cyan");

    spot5("svgHome", "cyan");
    spot5("svgEnd", "red");
    spot6("svgHome", "cyan");
    spot6("svgEnd", "red");
    spot7("svgHome", "red");
    spot7("svgEnd", "red");
    spot8("svgHome", "red");
    spot8("svgEnd", "cyan");

    spot9("svgHome", "cyan");
    spot9("svgEnd", "red");
    spot10("svgHome", "cyan");
    spot10("svgEnd", "red");
    spot11("svgHome", "red");
    spot11("svgEnd", "red");
    spot12("svgHome", "cyan");
    spot12("svgEnd", "cyan");

    spot13("svgHome", "red");
    spot13("svgEnd", "cyan");

}


function play10advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 10);
    var clicks = getNumClicks();
    setClicks(clicks, 10);
    scores();
    window.location.href = 'submit.php';
}


