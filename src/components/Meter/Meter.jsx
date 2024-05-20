import PropTypes from "prop-types";
import React,{useState,useEffect} from "react";
import "./style.css";
import Gauge from "./Gauge";
import { useNavigation } from '../../context API/NavigationContext';

export const Meter = ({
  rotation,
  className,
  frameClassName,
  value = "12",
  text = "mm/kg",
  text1 = "Puimonary PP",
  text2 = "40",
  rotate = "../../assets/Ellipse 3.svg",
  ellipse = "../../assets/Ellipse 1.svg",
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
  intersect = "../../assets/Intersect.svg",
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  const maxValue = parseFloat(value);
  const { isExiting} = useNavigation();

 useEffect(() => {
  if (!isExiting) {
  const animationDuration = 1;
  const framesPerSecond = 60; 
  const totalFrames = animationDuration * framesPerSecond;
  const increment = maxValue / totalFrames;

  const updateValue = () => {
    setCurrentValue((prevValue) => {
      const newValue = Math.min(prevValue + increment, maxValue);
      setCurrentPercent(newValue/parseFloat(text2)*100);
      return newValue;
    });
  };

  const intervalId = setInterval(updateValue, 1000 / framesPerSecond);

  return () => clearInterval(intervalId);
}
}, [isExiting, maxValue, text2, value]);

useEffect(() => {
    if (isExiting) {
      const animationDuration = 0.1;
      const framesPerSecond = 60;
      const totalFrames = animationDuration * framesPerSecond;
      const decrement = currentValue / totalFrames;

      const updateValue = () => {
        setCurrentValue((prevValue) => {
          const newValue = Math.max(prevValue - decrement, 0);
          setCurrentPercent(newValue/parseFloat(text2)*100);
          return newValue;
        });
      };

      const intervalId = setInterval(updateValue, 1000 / framesPerSecond);

      return () => clearInterval(intervalId);
    }
  }, [isExiting, currentPercent, currentValue, text2]);

  
  return (
    <div className={`meter ${className}`}>
      <div className="overlap-group">
        <div className="ellipse" />
        <img
          className="rotate"
          alt="Rotate"
          src={rotate}
        />
        <img className="img" alt="Ellipse" src={ellipse} />
        <div className={`frame-2 ${frameClassName}`}>
          <div className="frame-3">
            <div className="frame-3">
              <div className={`text-wrapper-2 ${divClassName}`}>{currentValue.toFixed(0)}</div>
              <div className={`text-wrapper-3 ${divClassNameOverride}`}>/</div>
            </div>
            <div className="mm-kg-wrapper">
              <div className="mm-kg">{text}</div>
            </div>
          </div>
          <div className="puimonary-PP-wrapper">
            <div className="puimonary-PP">{text1}</div>
          </div>
        </div>
        <div className={`text-wrapper-4 ${divClassName1}`}>0</div>
        <div className={`element ${divClassName2}`}>{text2}</div>
        <img
          className={`intersect ${rotation}`}
          alt="Intersect"
          src={intersect}
        />
       <Gauge percent={currentPercent} colors={divClassName ? ["#D1CC71", "#d9e19f"] : undefined} />

        

      </div>
    </div>
  );
};

Meter.propTypes = {
  rotation: PropTypes.oneOf(["zero", "two", "three", "four", "one"]),
  value:PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rotate: PropTypes.string,
  ellipse: PropTypes.string,
  intersect: PropTypes.string,
};
