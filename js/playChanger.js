

function highlight(playNum) {
    for (var p = 1; p < playNum; p++) {
        document.querySelector('#play' + p).style.backgroundColor = "lightgreen";
    }
    document.querySelector('#play' + playNum).style.backgroundColor = "#00BBDD";
}

function addListeners() {
    $('.playerTag').mousedown(function (event) {
        event.preventDefault();
        switch (event.which) {
            case 1:
                leftClickChange($(this));
                break;
            case 3:
                rightClickChange($(this));
                break;
            default:
                console.info("Invalid Click")
        }
    });
}

function loadPrevTimes(playNum) {
    for (var i = 1; i < playNum; i++) {
        var time = localStorage.getItem("TIME_" + i);
        var clicks = localStorage.getItem("CLICKS_" + i);
        var acc = localStorage.getItem("ACC_" + i);
        
        document.querySelector("#play" + i + " > div.time").textContent = time + " sec";
        document.querySelector("#play" + i + " > div.click").textContent = clicks;
        document.querySelector("#play" + i + " > div.acc").textContent = acc + "%";



    }
}

function setTime(time, playNum) {
    localStorage.setItem("TIME_" + playNum, time.toFixed(3));
    document.querySelector("#play" + playNum + " > div.time").textContent = time.toFixed(3) + " sec";
}

function setClicks(clicks, playNum) {

    localStorage.setItem("CLICKS_" + playNum, clicks.toString());
    document.querySelector("#play" + playNum + " > div.click").textContent = clicks.toString();
    setACC(clicks, playNum);
}

function goToNext(play) {
    window.location.href = 'play' + play + '.php';
}

function setACC(clicks, playNum) {
    var perfectClicks = ["3", "3", "6", "8", "14", "10", "18", "20", "15", "26"];
    var perfAmount = perfectClicks[playNum - 1];
    
    var acc = (perfAmount /  clicks) * 100;
    console.info(acc);
    
    localStorage.setItem("ACC_" + playNum, acc.toFixed(0));
    document.querySelector("#play" + playNum + " > div.acc").textContent = acc.toFixed(0) + "%";

}



