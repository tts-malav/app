import React, {useState} from 'react'

// rfc
export default function TextForm(props){

//  State       update function         Default Value
    const [text, setText] = useState('Enter Text Here'); 


    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let uText = text.toUpperCase();
        setText(uText);
    }

    const handleLowClick = ()=>{
        // console.log("Lowercase was clicked");
        let lText = text.toLocaleLowerCase();
        setText(lText);
    }

    const handleClearClick = ()=>{
        // console.log("Clear was clicked");
        let cText = "" ;
        setText(cText);
    }

    const handleExtraSpaces = ()=>{
        // console.log("Remove Spaaces was clicked");
        let nText = text.split(/[ ]+/);
        setText(nText.join(" "));
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }


    return (
        <>
        <div className="container">
            <h1 className="my-4">{props.heading}</h1>
            <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
            <p>{(0.008 * text.trim().split(/\s+/).length).toFixed(3)} Minutes required to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}


// Hooks : Use class features without making classes