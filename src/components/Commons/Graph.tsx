// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// interface Props {
//     data: number[];
// }

// const BarGraph: React.FC<Props> = ({ data }) => {
//     const svgRef = useRef<SVGSVGElement | null>(null);

//     useEffect(() => {
//         if (svgRef.current) {
//             const svg = d3.select(svgRef.current);

//             // Set up the chart dimensions
//             const width = 600;
//             const height = 400;
//             const margin = { top: 20, right: 20, bottom: 30, left: 40 };
//             const borderRadius = 2;
//             const chartWidth = width - margin.left - margin.right;
//             const chartHeight = height - margin.top - margin.bottom;

//             // Set up the scales
//             const xScale = d3
//                 .scaleBand()
//                 .domain(Array.from({ length: 10 }, (_, i) => i + 18).map(String))
//                 .range([0, chartWidth])
//                 .padding(0.1);

//             const yScale = d3
//                 .scaleLinear()
//                 .domain([0, d3.max(data) as number])
//                 .range([chartHeight, 0]);

//             // Set up the axes
//             const xAxis = d3.axisBottom(xScale);
//             const yAxis = d3.axisLeft(yScale);

//             svg
//                 .select(".x-axis")
//                 .attr("transform", `translate(0, ${chartHeight})`)
//                 .call(xAxis);

//             svg.select(".y-axis").call(yAxis);

//             // Draw the bars
//             svg
//                 .select(".bars")
//                 .selectAll("rect")
//                 .data(data)
//                 .join("rect")
//                 .attr("x", (_, i) => xScale(String(i + 18)) as number)
//                 .attr("y", (d) => yScale(d))
//                 .attr("width", xScale.bandwidth())
//                 .attr("height", (d) => chartHeight - yScale(d));
//         }
//     }, [data]);

//     return (
//         <svg ref={svgRef} width={600} height={400}>
//             <g className="x-axis" />
//             <g className="y-axis" />
//             <g className="bars" />
//         </svg>
//     );
// };

// export default BarGraph;
