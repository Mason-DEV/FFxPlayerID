window.addEventListener('load', function () {
    playerSelector();
});

var currID;

function playerSelector() {
//Add listener for what player we have selected
    console.info("playerSelector.js");
    document.querySelector('body').addEventListener("keydown", numPress, false);
}

function getCurrID() {
    return currID;
}

function numPress(e) {
    resetButtons();
    var keyCode = e.keyCode;
    switch (keyCode) {
        case 97:
        case 49:
            document.querySelector('#pos1').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 1;
            break;
        case 98:
        case 50:
            document.querySelector('#pos2').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 2;
            break;
        case 99:
        case 51:
            document.querySelector('#pos3').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 3;
            break;
        case 100:
        case 52:
            document.querySelector('#pos4').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 4;
            break;
        case 101:
        case 53:
            document.querySelector('#pos5').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 5;
            break;
        case 102:
        case 54:
            document.querySelector('#pos6').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 6;
            break;
        case 103:
        case 55:
            document.querySelector('#pos7').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 7;
            break;
        case 104:
        case 56:
            document.querySelector('#pos8').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 8;
            break;
        case 105:
        case 57:
            document.querySelector('#pos9').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 9;
            break;
        case 96:
        case 48:
            document.querySelector('#pos10').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 10;
            break;
        case 111:
        case 191:
            document.querySelector('#pos11').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 11;
            break;
        case 106:
            document.querySelector('#pos12').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            curr = 12;
            break;
        case 109:
            document.querySelector('#pos13').style.backgroundImage = "linear-gradient(#00bbdd, #006e82)";
            currID = 13;
            break;
        case 36:
        case 35:
            e.preventDefault();
            swapHomeEnd(keyCode);
            break;
        case 123:
            e.preventDefault();
            alert("Verify play");
            break;
        default:
            console.info("no id");
            // code block
    }

}

function resetButtons() {
    var c = document.getElementById("playerSelector").childNodes;
    for (var i = 0; i < c.length; i++) {
        if (c[i].nodeName.toLowerCase() == 'div') {
            c[i].style.backgroundImage = "linear-gradient(lightgrey, grey)";
        }
    }
}

function swapHomeEnd(key) {
    var home = document.querySelector('#svgHome');
    var end = document.querySelector('#svgEnd');
    if (key == 36) {
        if (window.getComputedStyle(end).visibility === "visible") {
            document.querySelector('#svgHome').style.visibility = 'visible';
            document.querySelector('#svgEnd').style.visibility = 'hidden';
        }
    }
    if (key == 35) {
        if (window.getComputedStyle(home).visibility === "visible") {
            document.querySelector('#svgHome').style.visibility = 'hidden';
            document.querySelector('#svgEnd').style.visibility = 'visible';
        }
    }
}