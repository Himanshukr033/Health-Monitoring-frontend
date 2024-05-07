import React from "react";
import line1 from "../assets/Line 1.svg"
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

export const Graph = () => {
    return (
            <div style={{position: "relative",marginTop:'20px'  }}>
                <div className="sub-header" style={{ display: "flex", width:'62vw', justifyContent: "space-between" }}>
                  <div className="text-wrapper-9" style={{ color: "#ffffff", fontFamily: "Inika-Bold", fontSize: "32px", fontWeight: 700, flexGrow: 2 }}>Aging vascular health</div>

                  <div className="sub-date-and-export" style={{ display: "flex", alignItems: "center", flexBasis: "auto",justifyContent: "space-between" }}>
                    <div className="text-wrapper-5" style={{ color: "var(--dimmed-gray)", fontFamily: "Inder-Regular", fontSize: "24px", fontWeight: 400,  whiteSpace: "nowrap" }}>12.02.23</div>
                    <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#6AA7C4' }}>
                    05.05.2024
                    </div>
                    <div className="text-wrapper-5" style={{ color: "var(--dimmed-gray)", fontFamily: "Inder-Regular", fontSize: "24px", fontWeight: 400, whiteSpace: "nowrap" }}>22.02.23</div>
                    
                    <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    sx={{
                    color: '#4A93B3',
                    fontWeight: 600,
                    fontSize: '1rem',
                    backgroundColor: 'rgba(74,147,179,0.19)',
                    border: '1px solid #4A93B3',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0px 8px 0px 8px',
                    '&:hover': {
                        backgroundColor: 'rgba(74,147,179,0.3)',
                    },
                    '&:focus': {
                        outline: 'none', 
                    },
                    '&:active': {
                        outline: 'none', 
                    },
                    }}
                >
                    Export
                </Button>

                  </div>
                </div>

                <div style={{ alignItems: "flex-start", display: "inline-flex", flexDirection: "column", gap: "23px", left: "0px", position: "absolute", top: "40px", height:'260px', maxWidth:'62vw', overflow:"hidden" }}>
                    <div style={{ alignItems: "center", display: "inline-flex", flex: "0 0 auto", gap: "20px", position: "relative" }}>
                        <div style={{ color: "rgba(255, 255, 255, 0.38)", fontFamily: "Inder-Regular", fontSize: "24px", fontWeight: "400", textAlign: "right",}}>100</div>
                        <img src={line1} alt="Line" style={{ height: "1px", objectFit: "cover", position: "relative"}} />
                    </div>
                    <div style={{ alignItems: "center", display: "inline-flex",left:'10px', flex: "0 0 auto", gap: "20px", position: "relative" }}>
                        <div style={{ color: "rgba(255, 255, 255, 0.38)", fontFamily: "Inder-Regular", fontSize: "24px", fontWeight: "400", textAlign: "right",}}>70</div>
                        <img src={line1} alt="Line" style={{ height: "1px", objectFit: "cover", position: "relative"}} />
                    </div>
                    <div style={{ alignItems: "center", display: "inline-flex",left:'10px', flex: "0 0 auto", gap: "20px", position: "relative" }}>
                        <div style={{ color: "rgba(255, 255, 255, 0.38)", fontFamily: "Inder-Regular", fontSize: "24px", fontWeight: "400", textAlign: "right",}}>30</div>
                        <img src={line1} alt="Line" style={{ height: "1px", objectFit: "cover", position: "relative"}} />
                    </div>
                    <div style={{ alignItems: "center", display: "inline-flex", left:'20px',flex: "0 0 auto", gap: "20px", position: "relative" }}>
                        <div style={{ color: "rgba(255, 255, 255, 0.38)", fontFamily: "Inder-Regular", fontSize: "24px", fontWeight: "400", textAlign: "right",}}>0</div>
                        <img src={line1} alt="Line" style={{ height: "1px", objectFit: "cover", position: "relative"}} />
                    </div>
                </div>
                <div style={{ left: "80px", position: "absolute", top: "68px", }}>
                    <div style={{ alignItems: "flex-end", display: "flex", gap: "50px", padding: "0px 0px 0px 1px", position: "relative", }}>
                        <div style={{ background: "linear-gradient(180deg, rgb(74, 147, 179) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "104px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(74, 147, 179) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "167px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(74, 147, 179) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "152px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(190.53, 51.07, 51.07) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "46px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(74, 147, 179) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "119px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(74, 147, 179) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "79px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(190.53, 51.07, 51.07) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "19px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(74, 147, 179) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "148px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(74, 147, 179) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "123px", position: "relative", width: "37px" }} />
                        <div style={{ background: "linear-gradient(180deg, rgb(209, 204, 113) 0%, rgb(1.57, 3.19, 3.9) 100%)", height: "67px", position: "relative", width: "37px" }} />
                    </div>
                </div>
            </div>
    );
};

export default Graph;
