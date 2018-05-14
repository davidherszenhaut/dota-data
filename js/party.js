// TODO
// * combine into one file with two d3.csv calls

var partyMMR = d3.select("#party-mmr");

var graphWidth = +partyMMR.attr("width");
var graphHeight = +partyMMR.attr("height");

var padding = {t: 20, r: 20, b: 20, l: 20};

d3.csv("../data/party.csv").then(function(data) {
    
    console.log(data);

    var MMROverTime = d3.nest()
        .key(function(d) {
            return d.MMR;
        })
        .entries(data);
    console.log(MMROverTime);

});