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
    highlight();
    buildPlay1();

}

function highlight() {
    document.querySelector('#play1').style.backgroundColor = "#00BBDD";
}

function buildPlay1() {
    //cyan - left click
    //red - right click
    //green - good
    console.info("building play");
    spot1("svgHome","red");
    spot1("svgEnd","green");
    spot2("svgHome","green");
    spot2("svgEnd","cyan");
    spot2("svgHome","green");
    spot2("svgEnd","green");
}


