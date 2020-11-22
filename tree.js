/*Setting up the Tree */
var root = 
{
    "name": "Aristocratic Families in War and Peace",
    "level": "#cceeff", "value": 60, 
    "children": [{  "name": "Bolkonsky Family",
                    "level": "#cceeff", "value": 45, 
                    "children": [{  "name": "Prince Bolkonsky",
                                    "level": "#cceeff", "value": 45,     
                                    "icon": "images/prince_nikolai_bolkonsky.jpg",   
                                    "children": [{  "name": "son: Prince Andrei Bolkonsky",
                                                    "level": "#cceeff", "value": 70, 
                                                    "icon": "images/andrei_bolkonsky.jpg",
                                                    "children": [{  "name": "wife: Lise Bolkonskaya (die in childbirth)",
                                                                    "level": "#cceeff", "value": 70, 
                                                                    "icon": "images/lise_bolkonskaya.jpg"
                                                                 },
                                                                 {  "name": "son: Prince Nikolay Bolkonsky",
                                                                    "level": "#cceeff", "value": 70 
                                                                 }]
                                                 },
                                                 {  "name": "daughter: Princess Marya Bolkonskya",
                                                    "level": "#cceeff", "value": 70,
                                                    "icon": "images/marya_bolkonskya.jpg",
                                                    "children": [{  "name": "husband: Nicholai Rostov",
                                                                    "level": "#cceeff", "value": 70,
                                                                    "icon": "images/nikolai_rostov.jpg"
                                                                 }]
                                                 },
                                                 {  "name": "(orphan) Mademoiselle Bourienne",
                                                    "level": "#cceeff", "value": 70,
                                                    "icon": "images/mademoiselle_bourienne.jpg"
                                                 }]
                                 }]
                 },
                 {  "name": "Rostov Family",
                    "level": "#cceeff", "value": 45,
                    "children": [{  "name": "Count Ilya Rostov & Countess Rostova",
                                    "level": "#cceeff", "value": 70,
                                    "icon": "images/count_ilya_rostov.jpg",
                                    "children": [{  "name": "son: Nicholai Rostov",
                                                    "level": "#cceeff", "value": 70,
                                                    "icon": "images/nikolai_rostov.jpg",
                                                    "children": [{  "name": "wife: Princess Marya Bolkonskya",
                                                                    "level": "#cceeff", "value": 70,
                                                                    "icon": "images/marya_bolkonskya.jpg"
                                                                 },
                                                                 {  "name": "cousin: Sonya Rostova (childhood sweetheart)",
                                                                    "level": "#cceeff", "value": 70,
                                                                    "icon": "images/sonya_rostova.jpg"
                                                                 }]
                                                 },
                                                 {  "name": "youngest son: Petya Rostov",
                                                    "level": "#cceeff", "value": 70
                                                 },
                                                 {  "name": "eldest daughter: Vera Rostova",
                                                    "level": "#cceeff", "value": 70
                                                 },
                                                 {  "name": "daughter: Natasha Rostova",
                                                    "level": "#cceeff", "value": 70,
                                                    "icon": "images/natasha_rostova.jpg",
                                                    "children": [{  "name": "husband: Pierre Bezukhov",
                                                                    "level": "#cceeff", "value": 70,
                                                                    "icon": "images/pierre_bezukhov.jpg"
                                                                 }]
                                                 }]
                                 }]
                 },
                 {  "name": "Bezukhov Family",
                    "level": "#cceeff", "value": 45,
                    "children": [{  "name": "Count Kirill Bezukhov",
                                    "level": "#cceeff", "value": 45,
                                    "children": [{  "name": "son: Pierre Bezukhov",
                                                    "level": "#cceeff", "value": 45,
                                                    "icon": "images/pierre_bezukhov.jpg",
                                                    "children": [{  "name": "wife: Natasha Rostov",
                                                                    "level": "#cceeff", "value": 55,
                                                                    "icon": "images/natasha_rostova.jpg"
                                                                 }]
                                                 }]
                                 }]
                 },
                 {  "name": "Kuragin Family",
                    "level": "#cceeff", "value": 45,
                    "children": [{  "name": "Prince Vasili Kuragin",
                                    "level": "#cceeff", "value": 45,
                                    "icon": "images/prince_vassily_kuragin.jpg",
                                    "children": [{  "name": "daughter: Helene Kuragina",
                                                    "level": "#cceeff", "value": 55,
                                                    "icon": "images/helene_kuragina.jpg",
                                                    "children": [{  "name": "(short marriage) Pierre Bezukhov",
                                                                    "level": "#cceeff", "value": 55,
                                                                    "icon": "images/pierre_bezukhov.jpg"
                                                                 }]
                                                 },
                                                 {  "name": "son: Hippolyte Kuragin",
                                                    "level": "#cceeff", "value": 55
                                                 },
                                                 {  "name": "son: Anatole Kuragin",
                                                    "level": "#cceeff", "value": 55,
                                                    "icon": "images/anatole_kuragin.jpg"
                                                 }]
                                 }]
                 },
                 {  "name": "Drubetskoy Family",
                    "level": "#cceeff", "value": 45,
                    "children": [{  "name": "Princess Anna Drubetskaya",
                                    "level": "#cceeff", "value": 60,
                                    "icon": "images/anna_drubetskoy.jpg",
                                    "children": [{  "name": "son: Prince Boris Drubetskoy",
                                                    "level": "#cceeff", "value": 60,
                                                    "icon": "images/boris_drubetskoy.jpg",
                                                    "children": [{  "name": "wife: Julie Karagina",
                                                                    "level": "#cceeff", "value": 60
                                                                 }]
                                                 }]
                                 }]
                 }]
};





/********************************************************************* Generating the Tree ***************************************************/

/*Defining the size and shape of the svg container where the graph is placed */
/* this first part defines the four margins that surround the block where the graph proper will be */
/* border 20 pixels at the top, 20 pixels at the bottom, 120 pixels left and right */

var margin = {
    top: 20,
    right: 0,
    bottom: 20,
    left: 0
},
width = 8000 - margin.right - margin.left,      
height = 8000 - margin.top - margin.bottom;  


var i = 0,
    duration = 500,
    rectW = 180,
    rectH = 60;

// declare a variable/function tree to the d3.js function and assign the size
var tree = d3.layout.tree().nodeSize([190, 50]);

// declare the function that will be used to draw the links between the nodes using the d3.js diagonal function
var diagonal = d3.svg.diagonal()
    .projection(function (d) {
    return [d.x + rectW / 2, d.y + rectH / 2];
});


// append our SVG working area to the body of the web page and create a group elements <g> that will contain our svg objects (nodes, text, and links)
var svg = d3.select("#body")                                                                    //select <svg> element so we can work with it
            .append("svg")
            .attr("width", width)                                                               //set the width and heigh of the <svg> element
            .attr("height", height)
            .call(zm = d3.behavior.zoom().scaleExtent([1,5]).on("zoom", redraw)).append("g")    //add a <g> element to <svg>
            .attr("transform", "translate(" + window.innerWidth/2 + "," + 0 + ")");             //scale, translate (move), and rotate our <g> element and its children, e.g. (350, 2) move 350 units right and 20 units down


//necessary so that zoom knows where to zoom and unzoom from
zm.translate([window.innerWidth/2, 0]);

//form x and y axes
root.x0 = 0;
root.y0 = 0;    //root.y0 = height;

//collapse the tree
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

//Collapse after the second level
root.children.forEach(collapse);

// call the function that draws our tree diagram.  use data "root" to create our tree
update(root);

// length of the page
d3.select("#body").style("height", "2800px");

//wrap text function
function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.5, // ems 
                x = text.attr("x"),
                y = text.attr("y"),
                dy = 0, //parseFloat(text.attr("dy")),
                tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", ++lineNumber * lineHeight + dy + "em")
                        .text(word);
            }
        }
    });
}



/******************************************** Update the tree ********************************************/ 
function update(source) {

    // First step: assign our nodes and links
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth, i.e. the horizontal or vertical spacing of the nodes.
    nodes.forEach(function (d) {
        d.y = d.depth * 120;
    });

    // Declare the variable/function node so that when we call it later, it will know to select the appropriate object (a node) with appropriate .id
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

    // Assing the variable/function nodeEnter to the action of appending a node to a particular position
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {return "translate(" + source.x0 + "," + source.y0 + ")";})
        .on("click", click);

    
    //add rectangle for each node 
    nodeEnter.append("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .style("fill", function (d) {return d._children ? "white" : "white"; });
    

    //add text label for each node    
    nodeEnter.append("text")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function(d) { return d.name; }).call(wrap, 180)

    
    //add an image to the last node to end the tree 
    node.append("image")
        .attr("xlink:href", function(d) { return d.icon;})
        .attr("x", rectW / 2.5)
        .attr("y", "-32px")
        .attr("width", "35px")
        .attr("height", "35px");
   

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

    // Update the node attributes and style, using value and level to separate the root nodes from the child nodes
    nodeUpdate.select("rect")
        .attr("width", rectW)
        .attr("height", function(d) { return d.value;})
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .style("fill", function (d) { return d._children ? "white" : d.level;});


    nodeUpdate.select("text")
        .style("fill", function (d) { return d._children ? "black" : d.type;})


    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
        return "translate(" + source.x + "," + source.y + ")";
    })
        .remove();

    nodeExit.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    nodeExit.select("text");


    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
        return d.target.id;
    });


    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        //.style("stroke", function(d) { return d.target.level; })
        .attr("x", rectW / 5)
        .attr("y", rectH / 5)
        .attr("d", function (d) {
        var o = {
            x: source.x0,
            y: source.y0
        };
        return diagonal({
            source: o,
            target: o
        });
    });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);


    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
        var o = {
            x: source.x,
            y: source.y
        };
        return diagonal({
            source: o,
            target: o
        });
    })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

//Redraw for zoom
function redraw() {
  //console.log("here", d3.event.translate, d3.event.scale);
  svg.attr("transform",
      "translate(" + d3.event.translate + ")"
      + " scale(" + d3.event.scale + ")");
}








