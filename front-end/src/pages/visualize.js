import React from "react";
import Globe from "react-globe.gl";

export default function visualize() {
  return (
    
    <Globe
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    />
  );
}