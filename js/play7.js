/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener('load', function () {
    play7();
});


function play7() {
    console.info("play7.js");
    //Sets current play to highlighted blue
    loadPrevTimes(7);
    highlight(7);
    buildPlay7();
    addListeners();
    timerStart();
}

function buildPlay7() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "red");
    spot1("svgEnd", "cyan");
    spot2("svgHome", "red");
    spot2("svgEnd", "green");
    spot3("svgHome", "green");
    spot3("svgEnd", "red");
    spot4("svgHome", "red");
    spot4("svgEnd", "green");

    spot5("svgHome", "cyan");
    spot5("svgEnd", "green");
    spot6("svgHome", "red");
    spot6("svgEnd", "cyan");
    spot7("svgHome", "red");
    spot7("svgEnd", "green");
    spot8("svgHome", "cyan");
    spot8("svgEnd", "green");

    spot9("svgHome", "red");
    spot9("svgEnd", "cyan");
    spot10("svgHome", "red");
    spot10("svgEnd", "green");
    spot11("svgHome", "cyan");
    spot11("svgEnd", "red");
    spot12("svgHome", "green");
    spot12("svgEnd", "red");

    spot13("svgHome", "red");
    spot13("svgEnd", "cyan");

}


function play7advance() {
    timerEnd();
    var time = calcTime();1
    setTime(time, 7);
    goToNext(8);
}
