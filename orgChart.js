var height = 200;
var width = 500;
var margin = {left: 50, right: 50, top: 40, bottom: 0};

var tree = d3.tree().size([width,height]);

var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");
