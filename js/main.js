// PARTY QUEUE AND SOLO QUEUE TOGGLE SWITCH

var partyGraphs = document.getElementsByClassName("party");
var soloGraphs = document.getElementsByClassName("solo");

function hideGraphs(graphsArray) {
    for (var i = 0; i < graphsArray.length; i++) {
        graphsArray[i].style.display = "none";
    }
}

function showGraphs() {
    for (var i = 0; i < partyGraphs.length; i++) {
        partyGraphs[i].style.display = "block";
    }
    for (var i = 0; i < soloGraphs.length; i++) {
        soloGraphs[i].style.display = "block";
    }
}

function queueSelect() {
    var value = document.getElementById("queue-select").value;
    if (value == "Party") {
        showGraphs();
        hideGraphs(soloGraphs);
    } else if (value == "Solo") {
        showGraphs();
        hideGraphs(partyGraphs);
    } else {
        showGraphs();
    }
}

// GO TO TOP BUTTON

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("go-to-top-btn").style.display = "block";
    } else {
        document.getElementById("go-to-top-btn").style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}