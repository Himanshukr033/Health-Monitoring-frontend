
import Header from "../components/Header";
import Model from "../components/Model";
import SideBar from "../components/SideBar";
import Dials from "../components/Dials";
import Graphs from "../components/Graphs";
import heart from "../assets/heart monitor.png"
import Footer from "../components/Footer";

function Optometry() {
  return (
    <>
      <SideBar />
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow:'hidden'
        }}
      >
        <Model />
        <div
          style={{
            margin: "10px 0px 0px 80px",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            overflow:'hidden'
          }}
        >
          <Header />
          <div
            style={{
              flex: 2,
              display: "flex",
              overflow:'hidden'
            }}
          >
            <Dials value1="26" value2="0" value3="26"/>
          </div>
          <div
            style={{
              flex: 2,
              display: "flex",
              overflow:'hidden'
            }}
          >
            <Graphs />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems:"center",
              overflow:'hidden'
            }}
          >
            <Footer/>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Optometry;
