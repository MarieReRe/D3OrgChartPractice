var height = 500;
var width = 1000;
var margin = {left: 50, right: 50, top: 40, bottom: 0};

var tree = d3.tree().size([width - 100,height - 100]);

var svg = d3.select("body").append("svg")
    .attr("height", height)
    .attr("width", width);

var chartGroup = svg.append('g')
                    .attr('transform', 'translate('+margin.left+', '+margin.top+')');

d3.json('/data/data.json').get(function(error, data){
   console.log(data);
   var root = d3.hierarchy(data, function(d){
       console.log(d);
       return d.Entities || d.Assets;
   });
   tree(root);
   console.log(root);
   chartGroup.selectAll("circle")
            //should be an array of nodes
            .data(root.descendants())
            .enter().append("circle")
                    .attr("cx",function(d){ return d.x;})
                    .attr("cy",function(d){ return d.y;})
                    .attr("r","5");


    chartGroup.selectAll("path")
              .data(root.descendants().slice(1))
              .enter().append("path")
              .attr("stroke", "black")
              .attr("class", "link")
              .attr("d", function(d){
                  console.log(d);
                return "M"+d.parent.x+","+d.parent.y+"L"+d.x+","+d.y;});
});