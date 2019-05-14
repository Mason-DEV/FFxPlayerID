/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener('load', function () {
    play2();
});


function play2() {
    console.info("play2.js");
    //Sets current play to highlighted blue
    loadPrevTimes(2);
    highlight(2);
    buildPlay2();
    addListeners();
    timerStart();
}

function buildPlay2() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "green");
    spot1("svgEnd", "green");
    spot2("svgHome", "cyan");
    spot2("svgEnd", "green");
    spot3("svgHome", "cyan");
    spot3("svgEnd", "green");
    spot4("svgHome", "green");
    spot4("svgEnd", "cyan");

}


function play2advance() {
    timerEnd();
    var time = calcTime();
    setTime(time, 2);
    goToNext(3);
}
