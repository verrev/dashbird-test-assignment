import React, { useRef, useEffect } from "react";
import {
  scaleBand,
  scaleLinear,
  axisBottom,
  axisLeft,
  select,
  min,
  max,
  curveBasis,
  timeFormat,
  isoParse,
  format,
  area,
  line
} from "d3";

const MARGIN = { top: 5, right: 0, bottom: 80, left: 40 };
const COLOR_MUTED = "#939393";
const COLOR_SECONDARY = "#3a2cba";
const COLOR_DANGER = "#fb0f05";

const addBars = (svg, data, innerHeight, innerWidth) => {
  const x = scaleBand().rangeRound([0, innerWidth], 0.05).padding(0.1);

  const y0 = Math.max(Math.abs(min(data)), Math.abs(max(data)));
  const y = scaleLinear().domain([-y0, y0]).range([innerHeight, 0]);

  const xAxis = axisBottom().scale(x).tickFormat(timeFormat("%H:%M"));
  const yAxis = axisLeft().scale(y).tickFormat(format(".2s"));

  x.domain(data.map((d) => isoParse(d.date)));
  y.domain([0, max(data, (d) => d.value)]);

  svg.append("g").call((g) => {
    g.call(xAxis);
    g.select(".domain").attr("stroke", COLOR_MUTED).attr("stroke-width", 1);
    g.attr("transform", `translate(0,${innerHeight})`);
    g.call(xAxis.tickSize(48));
    g.selectAll(".tick line, text")
      .attr("color", COLOR_MUTED)
      .attr("stroke-width", 1);
  });

  svg.append("g").call((g) => {
    g.call(yAxis);
    g.select(".domain").remove();
    g.selectAll(".tick line, text")
      .attr("color", COLOR_MUTED)
      .attr("stroke-width", 1);
  });

  svg
    .selectAll("bar")
    .data(data)
    .enter()
    .append("rect")
    .style("fill", (d) => (d.value < 0 ? COLOR_SECONDARY : COLOR_DANGER))
    .attr("x", (d) => x(d.date))
    .attr("width", 5)
    .attr("y", (d) => y(d.value))
    .attr("height", (d) => Math.abs(y(d.value) - y(0)));
};

const addLine = (svg, data, innerHeight, innerWidth) => {
  const x = scaleLinear().domain([0, data.length]).range([0, innerWidth]);
  const y = scaleLinear().domain([0, 1]).range([innerHeight, 0]);

  const svgLine = line()
    .x((d, i) => x(i))
    .y((d) => y(d))
    .curve(curveBasis);

  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", COLOR_SECONDARY)
    .attr("stroke-opacity", 0.6)
    .attr("stroke-width", 2)
    .attr("d", svgLine);

  const linearGradient = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", "primaryChartGradient")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%");

  linearGradient
    .append("stop")
    .attr("offset", "0%")
    .style("stop-color", COLOR_SECONDARY)
    .style("stop-opacity", 0.05);

  linearGradient
    .append("stop")
    .attr("offset", "100%")
    .style("stop-color", "#ffffff")
    .style("stop-opacity", 0.1);

  svg
    .append("path")
    .datum(data)
    .attr("stroke", "none")
    .attr(
      "d",
      area()
        .x((d, i) => x(i))
        .y0(innerHeight)
        .y1((d) => y(d))
        .curve(curveBasis)
    )
    .style("fill", "url(#primaryChartGradient)");
};

export default ({ width, height, primaryBarData, primaryLineData }) => {
  const chartDomNode = useRef(null);

  useEffect(() => {
    chartDomNode.current.innerHTML = "";

    const innerWidth = width - MARGIN.left - MARGIN.right;
    const innerHeight = height - MARGIN.top - MARGIN.bottom;

    const svg = select(chartDomNode.current)
      .append("svg")
      .attr("width", innerWidth + MARGIN.left + MARGIN.right)
      .attr("height", innerHeight + MARGIN.top + MARGIN.bottom)
      .append("g")
      .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    addBars(svg, primaryBarData, innerHeight, innerWidth);
    addLine(svg, primaryLineData, innerHeight, innerWidth);
  }, [primaryBarData, primaryLineData]);

  return <div ref={chartDomNode} />;
};
