/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener('load', function () {
    play9();
});


function play9() {
    console.info("play9js");
    //Sets current play to highlighted blue
    loadPrevTimes(9);
    highlight(9);
    buildPlay9();
    addListeners();
    timerStart();
}

function buildPlay9() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "green");
    spot1("svgEnd", "red");
    spot2("svgHome", "green");
    spot2("svgEnd", "red");
    spot3("svgHome", "green");
    spot3("svgEnd", "green");
    spot4("svgHome", "cyan");
    spot4("svgEnd", "red");

    spot5("svgHome", "red");
    spot5("svgEnd", "red");
    spot6("svgHome", "green");
    spot6("svgEnd", "cyan");
    spot7("svgHome", "red");
    spot7("svgEnd", "green");
    spot8("svgHome", "cyan");
    spot8("svgEnd", "green");

    spot9("svgHome", "red");
    spot9("svgEnd", "cyan");
    spot10("svgHome", "red");
    spot10("svgEnd", "red");
    spot11("svgHome", "red");
    spot11("svgEnd", "green");
    spot12("svgHome", "green");
    spot12("svgEnd", "green");

    spot13("svgHome", "red");
    spot13("svgEnd", "green");

}


function play9advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 9);
    goToNext(10);
}
