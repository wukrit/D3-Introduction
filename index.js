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
    .style("background-color", "blue")
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

// Updating nodes are the default selection—the result of the data
// operator. Thus, if you forget about the enter and exit selections,
// you will automatically select only the elements for which there
// exists corresponding data. A common pattern is to break the initial
// selection into three parts: the updating nodes to modify, the
// entering nodes to add, and the exiting nodes to remove.
// Update…
const ex6 = d3.select("#ex6")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .text(d => d)
    .style("color", "white")

// Enter…
ex6.enter().append("p")
    .text(d => d)
    .style("color", "white")

// Exit…
ex6.exit().remove();

// D3 can also handle transitions, such as fading the background
// to black
d3.select("body").transition()
    .duration(750)
    .style("background-color", "black")
    
