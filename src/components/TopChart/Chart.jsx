import React, { useRef, useEffect } from "react";
import { line, select, scaleLinear, area, curveBasis } from "d3";

const MARGIN = { top: 5, right: 0, bottom: 5, left: 0 };

export default ({ width, height, data }) => {
  const chartDomNode = useRef(null);

  useEffect(() => {
    chartDomNode.current.innerHTML = "";

    const innerWidth = width - MARGIN.left - MARGIN.right;
    const innerHeight = height - MARGIN.top - MARGIN.bottom;

    const x = scaleLinear().domain([0, data.length]).range([0, innerWidth]);
    const y = scaleLinear().domain([0, 1]).range([innerHeight, 0]);

    const svg = select(chartDomNode.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    const svgLine = line()
      .x((d, i) => x(i))
      .y((d) => y(d))
      .curve(curveBasis);
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#939393")
      .attr("stroke-opacity", 0.1)
      .attr("stroke-width", 2)
      .attr("d", svgLine);

    svg
      .append("circle")
      .attr("r", 1)
      .attr("cx", x(data.length - 1))
      .attr("cy", y(data[data.length - 1]))
      .attr("fill", "#939393");

    const linearGradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "topChartGradient")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%");
    linearGradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", "#939393")
      .style("stop-opacity", 0.03);

    linearGradient
      .append("stop")
      .attr("offset", "100%")
      .style("stop-color", "#ffffff")
      .style("stop-opacity", 0.2);

    svg
      .append("path")
      .datum(data)
      .attr("stroke", "none")
      .attr(
        "d",
        area()
          .x((d, i) => x(i))
          .y0(height)
          .y1((d) => y(d))
          .curve(curveBasis)
      )
      .style("fill", "url(#topChartGradient)");
  }, [data]);

  return <svg ref={chartDomNode} width={width} height={height} />;
};
