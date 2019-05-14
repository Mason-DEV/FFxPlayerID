/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var isRunning = false;
var startTime;
var endTime;



function timerStart() {
    startTime = new Date().getTime() / 1000;
//    isRunning = true;
}

function timerEnd() {
    endTime = new Date().getTime() / 1000;

}

function calcTime() {
    var time = endTime - startTime;
    return time;
}

function timerRunning() {
    return isRunning;
}
function returnTime() {

}
