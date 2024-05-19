import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Gauge = ({
  percent = 0,
  radius = 150,
  arcWidth = 0.1,
  colors = ["#1267ff", "#98c0ff"],
  ...rest
}) => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const animationDuration = 1; 
    const framesPerSecond = 20; 
    const totalFrames = animationDuration * framesPerSecond;
    const increment = percent / totalFrames; 

    
    const updatePercentage = () => {
      setCurrentPercent((prevPercent) => {
        const newPercent = Math.min(prevPercent + increment, percent);
        return newPercent;
      });
    };

   
    const intervalId = setInterval(updatePercentage, 1000 / framesPerSecond);

    
    return () => clearInterval(intervalId);
  }, [percent]);

  const strokeWidth = radius * arcWidth;
  const innerRadius = radius - strokeWidth;
  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * 0.75;
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(135, ${radius}, ${radius})`;
  const offset = arc - (currentPercent / 100) * arc;

  const gradientId = `grad-${Math.random()}`;

  return (
    <svg height={radius * 2} width={radius * 2} {...rest}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="15%" stopColor={colors[0]} stopOpacity="1" />
          <stop offset="85%" stopColor={colors[1] || colors[0]} stopOpacity="1" />
        </linearGradient>
      </defs>
      <circle
        className="gauge_base"
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        stroke="transparent"
        strokeDasharray={dashArray}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        transform={transform}
      />
      <motion.circle
        className="gauge_percent"
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        stroke={`url(#${gradientId})`}
        strokeDasharray={dashArray}
        strokeDashoffset={offset}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        style={{ transition: "stroke-dashoffset 0.3s" }}
        transform={transform}
      />
    </svg>
  );
};

export default Gauge;
