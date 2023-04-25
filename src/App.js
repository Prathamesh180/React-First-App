import './App.css';
import { useState } from "react";

import Navbar from './components/Navbar'
import Textbox from './components/Text'
// import About from './components/about'

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    setmode(mode==='light'?'dark':'light');
    document.body.style.backgroundColor = (mode==='light'?'#042743':'white');
  }
  return (
    <>
    <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    {/* <About/> */}
    <Textbox heading="Enter your text to edit" mode={mode}/>
    </div>
    </>
  )
}

export default App;