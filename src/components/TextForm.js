import React, {useState} from 'react'

// rfc
export default function TextForm(props){

//  State       update function         Default Value
    const [text, setText] = useState('Enter Text Here'); 


    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let uText = text.toUpperCase();
        setText(uText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowClick = ()=>{
        // console.log("Lowercase was clicked");
        let lText = text.toLocaleLowerCase();
        setText(lText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = ()=>{
        // console.log("Clear was clicked");
        let cText = "" ;
        setText(cText);
        props.showAlert("Cleared", "success");
    }

    const handleExtraSpaces = ()=>{
        // console.log("Remove Spaaces was clicked");
        let nText = text.split(/[ ]+/);
        setText(nText.join(" "));
        props.showAlert("Removed Spaces", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }


    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="my-4">{props.heading}</h1>
            <div className="my-3">

            <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode==='dark'?'grey':'white',
                 color: props.mode==='dark'?'white':'black'
                }} id="myBox" rows="8"></textarea>
            </div>

            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
            <p>{(0.008 * text.trim().split(/\s+/).length).toFixed(3)} Minutes required to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Please Enter Text:"}</p>
        </div>

        </>
    )
}


// Hooks : Use class features without making classes