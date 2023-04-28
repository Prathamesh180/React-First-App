import './App.css';
import { useState } from "react";

import Navbar from './components/Navbar'
import Textbox from './components/Text'
import About from './components/about'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {  
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('dark mode has been activated', 'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been activated', 'success');
    }
  }

  return (
    <>
    <Router>
    <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Textbox heading="Enter your text to edit" showAlert={showAlert} mode={mode}/>}/>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App;