import React from "react";
import 'antd/dist/antd.css';
import './snows.module.css';

const container = {
  position: "relative",
  width: "100%",
  background: "#06061a",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const snows = {
  position: "absolute",
  width: "100%",
  height: "100%"
}

const snowSpan = {
  position: "absolute",
  top: "-10%",
  left: "0",
  width: "1vw",
  height: "1vw",
  background: "#FFF",
  borderRadius: "50%",
  opacity: "0.8",
  boxShadow: "0 0 1vw 0.5vw rgba(255, 255, 255, 0.4)",
  animation: "snow-anim 10s 0s linear infinite",
  
}



const spanIndex = () => {
  let arr = []
  for (let i = 1; i < 51; i++) {
    arr = [...arr, i]
  }
  return arr
}

function SnowFlake() {
  return (
    <div style={container}>
      <div style={snows}>
        {spanIndex()?.map(i => (<span style={{ ...snowSpan, left: `${i * 2}%` }}></span>))}
      </div>
    </div>
  );
}

export default SnowFlake;