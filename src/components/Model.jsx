import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import heart from "../assets/heart-rotate.png";
import human from "../assets/human pattern.png";
import line from "../assets/Human line.png";
import ellipse from "../assets/Ellipse 14.png";
import ellipse2 from "../assets/Ellipse 13.png";
import ellipse1 from "../assets/Ellipse 11.png";
import mainHeart from "../assets/main_heart.png";
import "./style.css";

const Model = () => {
  const lineControls = useAnimation();
  const modelControls = useAnimation();
  const heartControls = useAnimation();
  const [isLineRevealed,setIsLineRevealed] = useState(false);

  useEffect(()=> {
    if (isLineRevealed) {
      lineControls.start({ width:5000, transition: { duration: 5 } });
      } else {
        console.log('afterClose')
      }
   
    
  }, [isLineRevealed, lineControls])

  
  const onComplete = () => {
    setIsLineRevealed(true)
  }

  useEffect(() => {
    async function sequence() {
      await lineControls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
      await setTimeout(() => {
        setIsLineRevealed(true);
      }, 1);
      await modelControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });


      await heartControls.start({ rotate: -30, opacity: 1, transition: { duration: 1 } });
    }
    sequence();
  }, [lineControls, modelControls, heartControls]);

  return (
    <div style={{ height: '100vh', width: '20vw', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        initial={{ y: '100vh', opacity: 0, width:250 }}
        animate={lineControls}
        style={{ zIndex: 5 }}
        onAnimationComplete={() => {onComplete}}
      >
        <img src={line} alt="human line" />
      </motion.div>
      <motion.div
      initial={{ height: '100vh', width:'20vw', backgroundColor: '#0D0E17' }}
      animate={{ height: 0 }}
      transition={{ duration: 1.2 }} 
      style={{ zIndex: 2, position: 'fixed', top: 0, left: 160, right: 0 }}
    />
        
      <motion.div
        style={{ position: 'relative', height: '100vh', width: '20vw', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ position: 'absolute', bottom: '5px', margin: 0, padding: 0, width: '20vw' }}>
          <div style={{ position: 'relative', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={ellipse1} alt='ellipse1' style={{ width: '100%' }} />
            <div style={{ position: 'absolute', bottom: '33px', left: '40px', margin: 0, padding: 0, zIndex: 1 }}>
              <img src={ellipse} alt='ellipse' style={{ width: '64%' }} />
            </div>
            <div style={{ position: 'absolute', top: '-35px', right: '-16px', margin: 0, padding: 0, zIndex: 0, width: '10vw' }}>
              <img src={ellipse2} alt='ellipse2' style={{ width: '80%' }} />
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '25px', height: '95vh', margin: 0, padding: 0 }}>
          <div style={{ position: 'relative', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={human} alt='human' style={{ height: '95vh' }} />
            <div style={{ position: 'absolute', top: '65px', display: "flex", alignItems: "center", justifyContent: "center", left: '25px', margin: 0, padding: 0 }}>
              <motion.img
                src={heart}
                alt='heart'
                initial={{ rotate: 0, opacity: 0 }}
                animate={heartControls}
                style={{ height: '30vh', aspectRatio: 1 }}
              />
              <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity:1 }}
              transition= { {duration: 1, delay:1 }}
              src={mainHeart} alt='heart-main' style={{ position: "absolute", zIndex: 1, height: '15vh', aspectRatio: 1 }} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Model;
