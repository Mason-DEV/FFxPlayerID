/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener('load', function () {
    play1();
});


function play1() {
    console.info("play1.js");
    //Sets current play to highlighted blue
    highlight(1);
    buildPlay1();
    addListeners();
    resestClicks();
    timerStart();
    
}


function buildPlay1() {
    //cyan - left click
    //red - right click
    //green - good
    spot1("svgHome", "red");
    spot1("svgEnd", "red");
    spot2("svgHome", "green");
    spot2("svgEnd", "red");
    spot3("svgHome", "green");
    spot3("svgEnd", "green");
    spot4("svgHome", "green");
    spot4("svgEnd", "green");
}



function play1advance(){
    timerEnd();
    var time = calcTime();
    setTime(time, 1);
    var clicks = getNumClicks();
    setClicks(clicks, 1);
    goToNext(2);
}

