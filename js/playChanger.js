/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function highlight(playNum) {
    for(var p = 1; p<playNum; p++){
        document.querySelector('#play'+p).style.backgroundColor = "lightgreen";
    }
    document.querySelector('#play'+playNum).style.backgroundColor = "#00BBDD";
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
        var time = localStorage.getItem("TIME_"+i);
        document.querySelector("#play"+i+" > div.time").textContent = time + " sec";

    }
}

function setTime(time, playNum) {
    localStorage.setItem("TIME_" +playNum, time.toFixed(3));
    document.querySelector("#play" +playNum+" > div.time").textContent = time.toFixed(3) + " sec";
}

function goToNext(play){
    window.location.href = 'play'+play+'.php';
}




