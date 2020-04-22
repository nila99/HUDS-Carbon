/*
 * StackedAreaChart - Object constructor function
 * @param _parentElement 	-- the HTML element in which to draw the visualization
 * @param _data						-- the data
 */




PieChart = function(_parentElement, _data, _eventHandler){
    this.parentElement = _parentElement;
    this.data = _data;
    this.eventHandler = _eventHandler;

    this.initVis();
}

PieChart.prototype.initVis = function() {
    var vis = this;


    vis.width = 360;
    vis.height = 360;
    vis.radius = Math.min(vis.width, vis.height) / 2;
    vis.donutWidth = 100;
    vis.color = d3.scaleOrdinal()
    .range(["#008ece", "#59c7eb", "#e0607e", "#eca0b2", "#077187", "#6aaab7", "#8e2043", "#bc7a8f",
      "#0b9086", "#54bfb7", "#fea090", "#fecfc7", "#3e5496", "#8290bb", "#b8bcc1"]);


    vis.svg = d3.select('#' + vis.parentElement)
		.append('svg')
    	.attr('width', vis.width)
    	.attr('height', vis.height)
    	.append('g')
    	.attr('transform', 'translate(' + (vis.width / 2) + ',' + (vis.height / 2) + ')');
	vis.arc = d3.arc()
    	.innerRadius(vis.radius - vis.donutWidth)
    	.outerRadius(vis.radius);
	vis.pie = d3.pie()
    	.value(function (d) {
        	return d.value;
    	})
    	.sort(null);
	vis.path = vis.svg.selectAll('path')
    	.data(vis.pie(vis.data))
    	.enter()
    	.append('path')
    	.attr('d', vis.arc)
    	.attr('fill', function (d, i) {
        	return vis.color(i);
    	})
    	.attr('transform', 'translate(0, 0)')

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

