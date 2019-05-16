/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener('load', function () {
    play5();
});


function play5() {
    console.info("play5.js");
    //Sets current play to highlighted blue
    loadPrevTimes(5);
    highlight(5);
    buildPlay5();
    addListeners();
    resestClicks();
    timerStart();

}

function buildPlay5() {
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
    spot7("svgHome", "red");
    spot7("svgEnd", "green");
    spot8("svgHome", "red");
    spot8("svgEnd", "red");

    spot9("svgHome", "red");
    spot9("svgEnd", "green");
    spot10("svgHome", "green");
    spot10("svgEnd", "red");
    spot11("svgHome", "green");
    spot11("svgEnd", "green");
    spot12("svgHome", "red");
    spot12("svgEnd", "red");

    spot13("svgHome", "green");
    spot13("svgEnd", "red");

}


function play5advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 5);
    goToNext(6);
    var clicks = getNumClicks();
    setClicks(clicks, 5);
}
