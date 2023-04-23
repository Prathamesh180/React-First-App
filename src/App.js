import './App.css';

import Navbar from './components/Navbar'
// import Textbox from './components/Text'
import About from './components/about'

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container my-3">
    <About/>
    {/* <Textbox heading="Enter your text to edit"/> */}
    </div>
    </>
  )
}

export default App;