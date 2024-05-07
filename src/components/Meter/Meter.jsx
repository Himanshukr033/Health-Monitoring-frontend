import PropTypes from "prop-types";
import React from "react";
import "./style.css";

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
              <div className={`text-wrapper-2 ${divClassName}`}>{value}</div>
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
