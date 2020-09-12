import React, { useRef, useEffect } from "react";
import { line, select, scaleLinear } from "d3";

const MARGIN = { top: 5, right: 5, bottom: 5, left: 5 };

export default ({ width, height, data }) => {
  const chartDomNode = useRef(null);

  useEffect(() => {
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
      .y((d) => y(d));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#bbb")
      .attr("stroke-width", 1)
      .attr("d", svgLine);

    svg
      .append("circle")
      .attr("r", 1)
      .attr("cx", x(data.length - 1))
      .attr("cy", y(data[data.length - 1]))
      .attr("fill", "#939393");
  }, []);

  return <svg ref={chartDomNode} width={width} height={height} />;
};
