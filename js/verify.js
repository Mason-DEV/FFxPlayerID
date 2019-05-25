
var playerColors = [];
var verified = false;

function verifyPlay() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var play = page.split(".php").shift();
  
    getColors();
    checkGreens();
    //do something with time here
    if(verified)
    eval(play + 'advance();');

}


function getColors() {
    // Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
    playerColors.length = 0;
    var allPlayerTags = document.getElementsByTagName('g');
    for (var i = 0; i < allPlayerTags.length; i++) {
        var playerTag = document.getElementsByTagName('g')[i].childNodes[0];
        var fill = playerTag.getAttribute("fill");
        playerColors.push(fill);
    }
}

function checkGreens() {
    for (var g = 0; g < playerColors.length; g++) {
        var color = playerColors[g];
        if (color == 'red' || color == 'cyan') {
            verified = false;
            alert("Not all players tagged correctly");
            break;
        }
        verified = true;
    }
}

