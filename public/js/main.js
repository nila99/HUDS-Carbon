let totalCEdata = []
let totalLUdata = []

// queue()
//     .defer(d3.csv,"data/totalCE.csv")
//     .defer(d3.csv,"data/totalLU.csv")
//     .defer(d3.csv,"data/totalCOC.csv")
//     .await(analyze);

function handleFileSelect() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    var f = event.target.files[0]; // FileList object
    var reader = new FileReader();

    reader.onload = function(event) {
        load_d3(event.target.result)
    };
    // Read in the file as a data URL.
    reader.readAsDataURL(f);
}

// function analyze(error, totalCE, totalLU, totalCOC) {
//   if(error) { console.log(error); }
//   totalCEdata = totalCE;
//   totalLUdata = totalLU
//   totalCOCdata = totalCOC
//   createVis();
// }

function load_d3(fileHandler) {
    d3.csv(fileHandler, function(error, root) {
        var vis = this;
        vis.pie = new PieChart("time-pie-chart", totalCEdata);
    };
};


// function createVis() {
//     var vis = this;
//     vis.pie = new WaffleChart("waffle-chart", totalLUdata);
//     vis.pie = new PieChart("time-pie-chart", totalCEdata);
//     vis.pie = new PieChart("time-pie-chart2", totalCOCdata);
 
// }