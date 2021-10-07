//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import {Header} from "./myComponents/Header";
import {Footer} from "./myComponents/Footer";
import {TextForm} from "./myComponents/TextForm";
// import { About } from './myComponents/About';
import { Alert } from './myComponents/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a0643';
      showalert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  }

    const [alert, setalert] = useState(null);
    const showalert = (message, type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setalert(null);
        }, 2500);
    }
    
   

  return (
    <>
    
//     <Router>
    <Header title="Text Analyzer" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm heading="Enter text here" mode={mode} showalert={showalert}/>
       <Footer/>
    
//     <Switch>
//           <Route exact path="/about">
//             <About mode={mode}  />
//           </Route>
//           <Route exact path="/">
//           <TextForm heading="Enter text here" mode={mode} showalert={showalert}/>
//           </Route>
//         </Switch>
//     </Router>
//     <Footer/>
    </>
  );
}

export default App;
