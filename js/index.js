window.addEventListener('load', function () {
    indexPlay();
});


function indexPlay() {
    console.info("index.js");
    //Sets current play to highlighted blue
//    highlight();
    buildIndexPlay();
    addListeners();
    timerStart();

}

function buildIndexPlay() {
    //cyan - left click
    //red - right click
    //green - good1
    console.info("building play");
    spot1("svgHomeINDEX", "red");
    spot2("svgHomeINDEX", "cyan");
}
