// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Listener/filter
button.on("click", function() {
    d3.event.preventDefault(); // back compatibility code
    // select filter input
    var date_filter = button.node().value;
    // filter data
    var filtered = tableData.filter(tableData => tableData.date==date_filter);
    table_creator(filtered);
})

// Iterate through filtered values to create table
function table_creator(date_filter) {
    tbody.html=("");
    date_filter.forEach(function(sighting) {
        //add a table row
        tbody.append("tr");
        //for each entry in "sighting" append table data value.
        Object.entries(sighting).forEach(([key, value]) => {
            tbody.append("td").text(value);
        })
    })
}