import Image from 'next/image'
import { Inter } from 'next/font/google'
import DraggableBubble from '../components/DraggableBubble'
import * as d3 from 'd3';


const inter = Inter({ subsets: ['latin'] })
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to build a prompt!</h1>
      <p>Click on the bubble and drag it around.</p>
      <DraggableBubble radius={50} fillColor="steelblue" />
    </div>
    
    
  );
}