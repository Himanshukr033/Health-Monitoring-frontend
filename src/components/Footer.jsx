import React from "react";
import shape from "../assets/Rectangle 12.png"
import shape2 from "../assets/Rectangle 13.png"
import shape3 from "../assets/Rectangle 14.png"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


export const Footer = () => {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", width:'62vw', margin:'0px', padding:'0px 5px'}}>
     <div style={{ width: "327px" }}>
        <div style={{position:"relative", margin:0, padding:0, display:"flex"}}>
            <img src={shape2} alt="shape"/>
            <div style={{position:"absolute", top:'5px', left:'15px'}}>
                Docter
            </div>
        </div>
      <div style={{ padding:'8px 5px',margin:0,width: "327px",backgroundColor: "#4a93b31a", border: "3px solid", borderColor: "rgba(74, 147, 179, 1)", textAlign:"center", display:"flex"}}>
        <img src={shape3} alt="shape" style={{height:'80px', width:'80px'}}/>
        <div style={{display:"flex",flexDirection:"column", marginLeft:'10px', justifyContent:'space-around', fontSize:'12px'}}>
            <div style={{display:"flex", gap:'10px'}}>
                <EmailIcon/>
                himanshukumar@project.com
            </div>
            <div style={{display:"flex", gap:'10px'}}>
                <CallIcon/>
                1234567890
            </div>
        </div>
        
      </div>
    </div>
    <div style={{ width: "327px" }}>
        <div style={{position:"relative", margin:0, padding:0, display:"flex"}}>
            <img src={shape} alt="shape"/>
        </div>
      <div style={{ margin:0,width: "327px",backgroundColor: "#4a93b31a", border: "3px solid", borderColor: "rgba(74, 147, 179, 1)", textAlign:"center"}}>
        
        <p style={{ padding:"5px 0px",color: "#ffffff", fontFamily: "Inika-Regular, Helvetica", fontSize: "10px", fontWeight: "400", width: "300px",margin:'auto'}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
