// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filter-form");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    // console.log(people);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row fir each value in hte ufoSighting object
        var cell = row.append("td");
        cell.text(value);
        });
    });

};