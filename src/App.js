import './App.css';

import Navbar from './components/Navbar'
import Textbox from './components/Text'

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container my-3">
    <Textbox heading="Enter your text to edit"/>
    </div>
    </>
  )
}

export default App;