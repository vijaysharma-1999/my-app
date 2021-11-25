import './App.css';
import {Navbar} from "./Components/Navbar";
// import About from './Components/About';
import Textform from './Components/Textform'
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  

// } from 'react-router-dom';


  function App() {
    const[alert,setalert]=useState(null)
    const showAlert=(massage,type)=>{
      setalert({
        msg:massage,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1000);
     }
    const[switchText,setswitchText]=useState("Enable Dark Mode")
    const[mode,setmode]=useState("light")
    const switchBtn =()=>{
      if (mode === "dark") {
        setmode('light');
        document.body.style.backgroundColor='rgb(214 213 216)';
        setswitchText('Enable Dark Mode')
   showAlert('Light Mode Opted Successfully','Success') 
   document.title= "Wordpress-Light Mode";
   setInterval(() => {
     document.title= "Virus Found! ";
     
   }, 5000 ); 
   setInterval(() => {
     document.title= "loading........... ";
     
   }, 1500); 
  } else {
    setmode('dark');
    document.body.style.backgroundColor='rgb(57 51 83)'
    setswitchText('Disable Dark Mode')
    showAlert('Dark Mode Opted Successfully','Success') 
    document.title= "Wordpress-Dark Mode"; 
      }
    }      
    return (
      <>
      {/* <Router> */}
      <Navbar nameofsite ="Text-Ch@nger" othermsg="About" mode={mode}   switchText={switchText} switchbtn={switchBtn}/>
              <Alert alert= {alert}/>
              {/* ___________________________________________________________ */}
                <div className="container">

                {/* <Switch>
                <Route path="/About">
                <About/>
                </Route> */}

                {/* _________________________________________________________________ */}

                {/* <Route path="/"> */}
                <Textform mode={mode}  showAlert={showAlert} heading="Enter something About our site"/>
                {/* </Route> */}
              {/* </Switch> */}
                </div>
      {/* </Router> */}
    </>
  );    }
export default App;
