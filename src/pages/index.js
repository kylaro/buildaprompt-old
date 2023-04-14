import React from 'react';
import DraggableBubble from '@/components/DraggableBubble';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Build A Prompt!</h1>
      <h2>Click and drag the bubbles!</h2>
      <DraggableBubble radius={50} fillColor="red" />
      <DraggableBubble radius={50} fillColor="steelblue" />
      <DraggableBubble radius={50} fillColor="purple" />
    </div>
  );
}