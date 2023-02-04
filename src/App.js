import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom"; 
function App() {
  const [mode, setmode] = useState('light') //whether dark mode is enabled or not

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    {/* <Router> */}
     <Navbar title="MonkeyWrite" mode={mode} toggleMode={toggleMode} abouttext="About Us"/>
     <div className="container my-3">
     {/* <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> */}
          <TextForm heading="Enter your text to analyse" mode={mode}/>
{/*            
          </Route>
        </Switch> */}
     
     </div>
     {/* </Router> */}
    </>
  );
}

export default App;
