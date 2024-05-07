import React from 'react'
import heart from "../assets/heart monitor.png";
import human from "../assets/human pattern.png";
import loading from "../assets/Bottom loading.png";
import ellipse from "../assets/Ellipse 14.png"
import ellipse2 from "../assets/Ellipse 13.png"
import ellipse1 from "../assets/Ellipse 11.png"
import ellipse3 from "../assets/Ellipse 12.png"

const Model = () => {
  return (

    <div style={{position: 'relative', height:'100vh', width: '20vw',  padding:0, display:'flex',flexDirection:'column', alignItems:'center'}}> 

        <div style={{position: 'absolute',bottom:'5px',margin:0, padding:0, width:'20vw'}}>
            <div style={{position: 'relative',margin:0, padding:0, display:'flex',flexDirection:'column', alignItems:'center'}}>
                <img src={ellipse1} alt ='ellipse1' style={{width:'100%'}} />
                <div style={{position: 'absolute',bottom:'33px', left:'40px',margin:0, padding:0, zIndex:1,}}>
                    <img src={ellipse} alt ='ellipse' style={{width:'64%'}} />
                </div>
                <div style={{position: 'absolute',top:'-35px', right:'-16px',margin:0, padding:0, zIndex:0,width:'10vw'}}>
                    <img src={ellipse2} alt ='ellipse2' style={{width:'80%'}}/>
                </div>

            </div>
        </div>
        <div style={{position: 'absolute',bottom:'25px', height:'95vh', margin:0, padding:0}}> 
            
            <div style={{position: 'relative',margin:0, padding:0, display:'flex',flexDirection:'column', alignItems:'center'}}>
                <img src={human} alt ='human' style={{height:'95vh'}}/>
                <div style={{position: 'absolute',top:'65px', left:'25px', margin:0, padding:0}}>
                    <img src={heart} alt ='heart' style={{height:'30vh', aspectRatio:1}}/>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Model