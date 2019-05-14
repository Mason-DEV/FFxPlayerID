/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener('load', function () {
    play6();
});


function play6() {
    console.info("play6.js");
    //Sets current play to highlighted blue
    loadPrevTimes(6);
    highlight(6);
    buildPlay6();
    addListeners();
    timerStart();

}


function buildPlay6() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "cyan");
    spot1("svgEnd", "cyan");
    spot2("svgHome", "green");
    spot2("svgEnd", "green");
    spot3("svgHome", "green");
    spot3("svgEnd", "green");
    spot4("svgHome", "cyan");
    spot4("svgEnd", "green");

    spot5("svgHome", "green");
    spot5("svgEnd", "green");
    spot6("svgHome", "cyan");
    spot6("svgEnd", "cyan");
    spot7("svgHome", "cyan");
    spot7("svgEnd", "green");
    spot8("svgHome", "green");
    spot8("svgEnd", "green");

    spot9("svgHome", "green");
    spot9("svgEnd", "cyan");
    spot10("svgHome", "green");
    spot10("svgEnd", "cyan");
    spot11("svgHome", "cyan");
    spot11("svgEnd", "green");
    spot12("svgHome", "cyan");
    spot12("svgEnd", "green");

    spot13("svgHome", "green");
    spot13("svgEnd", "green");

}

function play6advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 6);
    goToNext(7);
}
