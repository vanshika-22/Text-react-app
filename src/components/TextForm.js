import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        setText("you have click"+ text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLOClick= ()=>{
        setText("you have click"+ text)
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleclearClick= ()=>{
        setText("you have click"+ text)
        let newText="";
        setText(newText)
    }
    const handleOnChange= (event)=>{
         setText(event.target.value)
    }
    const[text,setText]= useState("");
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="mybox" class="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}  id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLOClick}>Covert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleclearClick}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in textbox above to preview it here:"}</p>
        </div>
        </>
    )
}
