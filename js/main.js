var partyGraphs = document.getElementsByClassName("party");
var soloGraphs = document.getElementsByClassName("solo");

function hideGraphs(graphsArray) {
    for (var i = 0; i < graphsArray.length; i++) {
        graphsArray[i].style.display = "none";
    }
}

// hideGraphs(soloGraphs);