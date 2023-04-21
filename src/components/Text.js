import React, {useState} from "react";

export default function Textbox(props){

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleUpperClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclearClick = () =>{
    let newText = "";
    setText(newText);
  }

  const[text, setText] = useState("Enter your text here");
    return(
      <>
      <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control border-3 text-black-50" value={text} onChange={handleOnChange} id="myBox" rows="8"/>
      </div>
      <button className="btn btn-primary m-1" onClick={handleUpperClick} >Convert To UpperCase</button>
      <button className="btn btn-primary m-1" onClick={handleLowerClick} >Convert To lowerCase</button>
      <button className="btn btn-primary m-1" onClick={handleclearClick} >Cleat text</button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} : words and {text.length} : characters.</p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
    )
  }
