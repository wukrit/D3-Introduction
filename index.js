// Selections

// Changing style of DOM elements normally
// const paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(paragraph => {
//     paragraph.style.setProperty("color", "blue", null)
// })

// Changing Style of DOM elements with D3
d3.selectAll("p").style("color", "blue")

// You can still select individual elements with D3 using `.select()`
d3.select("body").style("background-color", "grey")
// D3 utilizes standard selectors such as 'p' 'div' 'body'
// D3 selectors return a node or an array of nodes






