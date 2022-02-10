import * as d3 from "d3";

function drag(simulation) {
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}

function ticked(link, node) {
  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);

  // container.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  node.attr("transform", (d) => {
    return "translate(" + d.x + "," + d.y + ")";
  });
}

const depthToRadius = (depth) => {
    if (depth == 0){
        return 30 // Ecosystem
    }
    else if(depth == 1){
        return 22 // Planet
    }
    else if(depth == 2){
        return 16 // Moon
    }
    else if(depth == 3){
        return 10 // Asteriod
    }
    else {return 5}
};

const depthToFontSize = (depth) => {
    if (depth == 0){
        return 10 // Ecosystem
    }
    else if(depth == 1){
        return 8 // Planet
    }
    else if(depth == 2){
        return 6 // Moon
    }
    else if(depth == 3){
        return 4 // Asteriod
    }
    else {return 4}
};

const useTheme = (light, dark) => {
  if (Boolean(document) === true){
    if (document.getElementsByTagName('html')[0].classList.contains('dark') === true){
      return dark;
    }
    else {
      return light;
    }
  }
  else{
    return light;
  }
}

// handling node colors based on node hierarchy
const mapColors = (depth) => {
  console.log(document.getElementsByTagName('html')[0].classList.contains('dark'))
  let colors = [];
  if (document.getElementsByTagName('html')[0].classList.contains('dark') === true){
    colors = ['#0c0c0c', '#1c1b24', '#202020', '#00000000', '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab'];
  }
  else {
    colors = ['#eee', '#eee', '#eee', '#eeeeee00', '#edc949', '#af7aa1', '#ff9da7', '#9c755f', '#bab0ab'];
  }
  return colors[depth];
};

export function forceDirectedGraph(data, element) {
  const root = d3.hierarchy(data);
  const links = root.links();
  const nodes = root.descendants();

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(10)
        .strength(2)
    )
    .force(
      "collide",
      d3.forceCollide((d) => depthToRadius(d.depth))
    )
    .force("charge", d3.forceManyBody().strength(-400))

    .force("x", d3.forceX())
    .force("y", d3.forceY());

    let width = 600;
    let height = 400;

    const svg = d3
        .select(element)
        .attr("viewBox", [-width / 2, -height / 2, width, height])
        .style("width", "100%")
        .style("height", "auto");


    svg.call(d3.zoom().on("zoom", function (event) {
        svg.attr("transform", event.transform)
    }));

    const link = svg
        .append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-dasharray", ("3, 3"))
        .selectAll("line")
        .data(links)
        .join("line");

    // Wrapper for circle and text label
    const nodesContainer = svg
        .append("g")
        .selectAll("g")
        .data(nodes)
        .enter()
        .append("g")
        .call(drag(simulation));

    // Adding circles
    nodesContainer
        .append("circle")
        .attr("fill", (d) => mapColors(d.depth))
        .attr("r", (d) => depthToRadius(d.depth));

    // Adding Labels
    nodesContainer
        .append("text")
        .attr("font-size", (d) => depthToFontSize(d.depth))
        .attr("font-weight", 400)
        .attr("text-anchor", "middle")
        .attr("cursor", "default")
        .attr("x", 0)
        .attr("dy", ".35em")
        .style("fill", useTheme("#000", "#fff"))
        .text((d) => d.data.name);

    nodesContainer.append("svg:image")
        .attr("xlink:href",  function(d) { return d.data.img;})
        .attr("x", function(d) { return -2;})
        .attr("y", function(d) { return -2;})
        .attr("height", (d)=> depthToRadius(d.depth)*1.2)
        .attr("width", (d)=> depthToRadius(d.depth)*1.2)
        .attr("title", (d)=> d.data.tooltip);

//   nodesContainer.append("title").text((d) => d.data.name);

  simulation.on("tick", () => ticked(link, nodesContainer));

  return svg.node();
}
