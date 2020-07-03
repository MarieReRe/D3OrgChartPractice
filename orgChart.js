d3.json("data.json", function(data) {
    console.log(data);
});

var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");


