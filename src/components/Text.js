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
  const handlecopytext = () => {
    var text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleextraspaces = () =>{
    // let text = document.querySelector("#myBox");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}
  const[text, setText] = useState("Enter your text here");
    return(
      <>
      <div style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control border-3" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#858e9d':'white'}} id="myBox" rows="8"/>
      </div>
      <button className="btn btn-primary m-1" onClick={handleUpperClick} >Convert To UpperCase</button>
      <button className="btn btn-primary m-1" onClick={handleLowerClick} >Convert To lowerCase</button>
      <button className="btn btn-primary m-1" onClick={handleclearClick} >Clear text</button>
      <button className="btn btn-primary m-1" onClick={handlecopytext} >copy text</button>
      <button className="btn btn-primary m-1" onClick={handleextraspaces} >Remove extra spaces</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} : words and {text.length} : characters.</p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to see preview here'}</p>
      </div>
      </>
    )
  }
