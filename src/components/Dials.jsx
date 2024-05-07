import React from 'react'
import { Meter } from "./Meter";
import "./style.css";
import ellipse from '../assets/Ellipse 1.svg';
import intersect from '../assets/Intersect.svg'
import ellipse2 from '../assets/Ellipse 3.svg';
import ellipse3 from '../assets/Ellipse 3-1.svg';
import ellipse4 from '../assets/Ellipse 3-2.svg';

const Dials = () => {
  return (  
        <div style={{display:'flex', }}>
        <Meter
          className="meter-instance"
          ellipse={ellipse}
          frameClassName="design-component-instance-node"
          intersect={intersect}
          rotate={ellipse2}
          rotation="zero"
          value="12"
          text="bpm"
          text1="Heart rate"
          text2="220"
        />
        <Meter
          className="meter-instance"
          divClassName="meter-2"
          divClassName1="meter-2"
          divClassName2="meter-2"
          divClassNameOverride="meter-2"
          ellipse={ellipse}
          intersect={intersect}
          rotate={ellipse3}
          rotation="zero"
          value="12"
          text="mm/kg"
          text1="Systemic PP"
          text2="120"
        />
        <Meter
          className="meter-instance"
          ellipse={ellipse}
          intersect={intersect}
          rotate={ellipse4}
          rotation="zero"
          value="12"
          text="mm/kg"
          text1="Puimonary PP"
          text2="40"
        />
        </div>

  )
}

export default Dials