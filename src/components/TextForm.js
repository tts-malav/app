import React, {useState} from 'react'

// rfc
export default function TextForm(props) {

// State       update function         Default Value
    const [text, setText] = useState('Enter Text Here'); 


    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

     
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
  )
}


// Hooks : Use class features without making classes