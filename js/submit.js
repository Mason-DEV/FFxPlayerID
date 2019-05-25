window.addEventListener('load', function () {
    submit();
});



function submit() {
    //Sets current play to highlighted blue
//    fillTable();
//    phpstuff();



}

function fillTable(){
    for (var i = 1; i < 11; i++) {
        console.info("filling table");
        var time = localStorage.getItem("TIME_" + i);
        var clicks = localStorage.getItem("CLICKS_" + i);
        var acc = localStorage.getItem("ACC_" + i);
        document.querySelector("#play" + i + " > td:nth-child(2)").textContent = clicks;
        document.querySelector("#play" + i + " > td:nth-child(3)").textContent = acc + "%";
        document.querySelector("#play" + i + " > td:nth-child(4)").textContent = time + " sec";
    }
}
