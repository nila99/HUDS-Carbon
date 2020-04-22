/*
 * StackedAreaChart - Object constructor function
 * @param _parentElement    -- the HTML element in which to draw the visualization
 * @param _data                     -- the data
 */


WaffleChart = function(_parentElement, _data, _eventHandler){
    this.parentElement = _parentElement;
    this.data = _data;
    this.eventHandler = _eventHandler;

    this.initVis();
}

WaffleChart.prototype.initVis = function() {
    var vis = this;


    vis.total = 0;
    vis.width;
    vis.height;
    vis.widthSquares = 50;
    vis.heightSquares = 5;
    vis.squareSize = 10;
    vis.gap = 1;
    vis.color =d3.scaleOrdinal()
    .range(["#59c7eb", "#e0607e", "#eca0b2", "#077187", "#6aaab7", "#8e2043", "#bc7a8f",
      "#0b9086", "#54bfb7", "#fea090", "#fecfc7", "#3e5496", "#8290bb", "#b8bcc1", "#008ece"]);



    vis.total = d3.sum(vis.data, function(d) { return d.value; });
    //value of a square





    vis.width = (vis.squareSize*vis.widthSquares) + vis.widthSquares*vis.gap + 25;
    vis.height = (vis.squareSize*vis.heightSquares) + vis.heightSquares*vis.gap + 25;

    vis.waffle = d3.select('#' + vis.parentElement)
      .append("svg")
      .attr("width", vis.width)
      .attr("height", vis.height)
      .append("g")
      .selectAll("div")
      .data(vis.data)
      .enter()
      .append("rect")
      .attr("width", vis.squareSize)
      .attr("height", vis.squareSize)
      .attr("fill", function(d)
      {
        return vis.color(d.groupIndex);
      })
      .attr("x", function(d, i)
        {
          //group n squares for column
          vis.col = Math.floor(i/vis.heightSquares);
          return (vis.col*vis.squareSize) + (vis.col*vis.gap);
        })
      .attr("y", function(d, i)
      {
        vis.row = i%vis.heightSquares;
        return (vis.heightSquares*vis.squareSize) - ((vis.row*vis.squareSize) + (vis.row*vis.gap))
      })

             //add legend with categorical data
    vis.legend = d3.select("#legend")
      .append("svg")
      .attr('width', 300)
      .attr('height', 300)
      .append('g')
      .selectAll("div")
      .data(vis.data)
      .enter()
      .append("g")
      .attr('transform', function(d,i){ return "translate(0," + i*20 + ")";});
    vis.legend.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d, i) { return vis.color(i)});
    vis.legend.append("text")
      .attr("x", 25)
      .attr("y", 13)
      .text( function(d) { return d.CarbonCat});

    //add value of a unit square
    vis.legend2 = d3.select("#legend")
      .select('svg')
      .append('g')
      .attr('transform', "translate(100,0)");


};



// Bring a D3 element to the front
d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
        this.parentNode.appendChild(this);
    });
};

