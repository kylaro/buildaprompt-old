// DraggableBubble.js
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';


const DraggableBubble = (props) => {
  const { radius, fillColor } = props;
  const [nodes, setNodes] = useState([{ x: 100, y: 100, id: 0 }]);
  const [links, setLinks] = useState([]);
  const svgRef = useRef();

  const spawnBubble = (parent) => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = radius * 2 + 2;
    const newNode = {
      x: parent.x + Math.cos(angle) * distance,
      y: parent.y + Math.sin(angle) * distance,
      id: nodes.length,
    };
    setNodes([...nodes, newNode]);
    setLinks([...links, { source: parent.id, target: newNode.id }]);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const simulation = d3
      .forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-100))
      .force('collision', d3.forceCollide(radius))
      //.force('center', d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2))
      .force('link', d3.forceLink(links).distance(radius * 2 + 2).id((d) => d.id))
      .alphaTarget(0.3)
      .on('tick', () => {
        svg.selectAll('circle').attr('cx', (d) => d.x).attr('cy', (d) => d.y);
        svg.selectAll('line').attr('x1', (d) => d.source.x).attr('y1', (d) => d.source.y).attr('x2', (d) => d.target.x).attr('y2', (d) => d.target.y);
      });

    const drag = d3
      .drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
      d3.select(this).raise().attr('fill', 'lightsteelblue');
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      d3.select(this).attr('fill', fillColor);
    }

    svg
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', radius)
      .attr('fill', fillColor)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .call(drag)
      .on('click', (event, d) => {
        event.stopPropagation();
        spawnBubble(d);
      });

    svg
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', 'gray')
      .attr('stroke-width', 1);

    return () => {
      simulation.stop();
    };
  }, [nodes, links, fillColor, radius]);

  return (
    <svg
      ref={svgRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      {nodes.map((node) => (
        <circle
          key={node.id}
          r={radius}
          fill={fillColor}
          style={{ pointerEvents: 'all' }}
        />
      ))}
      {links.map((link, index) => (
        <line key={index} stroke="gray" strokeWidth={1} />
      ))}
    </svg>
  );
};

export default DraggableBubble;
