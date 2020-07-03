var height = 200;
var width = 500;
var margin = {left: 50, right: 50, top: 40, bottom: 0};

var tree = d3.layout.tree().size([width,height]);

var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

var chartGroup = svg.append('g')
                    .attr('transform', 'translate('+margin.left+', '+margin.top+')');

d3.json('/data/data.json').get(function(error, data){
   console.log(data);
   var root = d3.hierarchy(data);
   tree(root);
   chartGroup.selectAll("circle")
            .data(root.descendants())
            .enter().append("circle")
                    .attr("cx",function(d){ return d.x;})
                    .attr("cy",function(d){ return d.y;})
                    .attr("r","5");
    chartGroup.selectAll("path")
              .data(root.descendants().slice(1))
              .enter().append("path")
              .attr("class", "link")
              .attr("d", function(d){return "M"+d.x+","+d.y+"L"+d.entities.x+","+d.name.y;});
});