import React, {useState} from 'react'


export default function Textform(props) {
    const Textup = ()=>{
        // console.log("clicked");
        let uppercase =textUpper.toUpperCase();
        setText(uppercase);
        props.showAlert('Text converted to Upper Case','Success')
    }
    const Textdown = ()=>{
        // console.log("To lower case");
        let lowercase =textUpper.toLowerCase();
        setText(lowercase);
        props.showAlert('Text converted to Lower Case','Success')
    }
    const onChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const clear = ()=>{
        // console.log("on change");
        setText(' ')
        props.showAlert('Text is cleared','Success')
    }
    const copy =()=>{
        // console.log("copy button")
        let copytext = document.getElementById("exampleFormControlTextarea1");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        props.showAlert('copied to clipboard','Success')

    }
    // setText("The Text has been changed")
    const [textUpper, setText]= useState('');
    // ________________________________________________________________
        // let str =textUpper;
        // str.length;
        
    // const char =()=>{

    // }
    const a = textUpper.length;
    return (
<>

<div className="container my-5 font-size-bold">

<div>
            
        <div className="mb-3">
        <h1 className ={`text-${props.mode===`dark`?`light`:`dark`}`}> {props.heading} </h1>
        <textarea className="form-control" style={{backgroundColor:props.mode===`dark`?`lightgrey`:`white`, color:props.mode===`dark`}} value={textUpper} onChange={onChange}id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <button className="btn btn-primary " onClick={Textup}>Change to Upper Case</button>
        <button className="btn btn-danger mx-5" onClick={Textdown}>Change to Lower Case</button>
        <button className="btn btn-secondary" onClick={clear}>Clear text</button>
        <button className="btn btn-warning mx-5" onClick={copy}>Copy text</button>

</div>
            <div className={` container my-3 text-${props.mode===`dark`?`light`:`dark`} `} >
                <h2 >Your Text Summary </h2>
                <div className='container'>
                <p className="my-1">{textUpper.split(" ").length} words and  {a} Alphabets</p>
                <p className="my-1">Average time to read the above text is {1*textUpper.split(" ").length } seconds</p>
                <p >Note: The average time is 60WPM</p>
                <h2>Preview</h2>
                <p>{textUpper.length>0?textUpper:`You Haven't entered anything `}</p>
                </div>
</div>
</div>

</>
    )
}
