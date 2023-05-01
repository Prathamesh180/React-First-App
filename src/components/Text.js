import React, {useState} from "react";

export default function Textbox(props){

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleUpperClick = () =>{
    let newText = text.toUpperCase();
    setText(newText); 
    props.showAlert('Converted to uppercase','success');
  }
  const handleLowerClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase','success');
  }
  const handleclearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert('Text cleared','success');
  }
  const handlecopytext = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard','success');
  }
  const handleextraspaces = () =>{
    // let text = document.querySelector("#myBox");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed','success');
}
  const[text, setText] = useState("Enter your text here");
    return(
      <>
      <div style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control border-3" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#858e9d':'white'}} id="myBox" rows="8"/>
      </div>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpperClick} >Convert To UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLowerClick} >Convert To lowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleclearClick} >Clear text</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handlecopytext} >copy text</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleextraspaces} >Remove extra spaces</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} : words and {text.length} : characters.</p>
        <p>{(0.008 * text.split(" ").filter((element) => {return element.length!==0}).length).toFixed(2)} to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
      </>
    )
  }
