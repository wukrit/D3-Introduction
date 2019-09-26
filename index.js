// Selections
//
// Changing style of DOM elements normally
const paragraphs = document.querySelectorAll("#old1 p")
paragraphs.forEach(paragraph => {
    paragraph.style.setProperty("color", "blue", null)
})

// Changing Style of DOM elements with D3
d3.selectAll("#ex1 p")
    .style("color", "blue")

// You can still select individual elements with D3 using `.select()`
d3.select("body")
    .style("background-color", "black")
// D3 utilizes standard selectors such as 'p' 'div' 'body'
// D3 selectors return a node or an array of nodes


// Dynamic Properties
//
// Randomly Color paragraphs
d3.selectAll("#ex2 p")
    .style("color", () => "hsl(" + Math.random() * 360 + ",100%,50%)")

// Alternate colors for even and odd nodes
d3.selectAll("#ex3 p")
    .style("color", (d, i) => i % 2 ? "#ecf542" : "#42f5ec")

// We can use `.data()` to create an array of values that will get passed
// to the corresponding index of the slected nodes. We can use this
// to assign different values to sequential elements.
d3.selectAll("#ex4 p")
    .data([4, 8, 15])
        .style("font-size", d => d + "px")
        .style("color", "white")


// Enter and Exit
//
// If there are more values inside the data array, the overflow turns
// forms `.enter()`
d3.select("#ex5")
    .selectAll("p")
    .data([4, 8, 15, 23, 42])
        .style("font-size", d => d + "px")
        .style("color", "white")
    .enter().append("p")
        .text(d => `I'm number ${d}!`)
        .style("color", "white")

