import React,{useState} from 'react'

export default function TextUtils(props) {
    const [Text,SetText] = useState("Enter Something Here")

    const toUpper =() =>{
        SetText(Text.toUpperCase())
    }
    const toLower =()=>{
        SetText(Text.toLowerCase())
    }
    const Capitalize =()=>{
        SetText(Text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()))
    }
    const Clear =()=>{
        SetText("")
    }
    const Reverse =()=>{
        SetText(Text.split('').reverse().join(''))
    }

    const ConvOP = (event) =>{
        console.log("on click")
        SetText(event.target.value)
    }
  return (
    <div className='container'>
      <div className="mb-3  my-3">
        <h1>Enter Some text to be utilize</h1>
        <textarea style={{backgroundColor : props.mode==='dark'?'grey':'white'}} className="form-control" id="exampleFormControlTextarea1" onChange={ConvOP} value={Text} rows="8"></textarea>
      </div>
      
      <button type="button" onClick={toUpper} class = "btn btn-primary">Uppercase</button>
      <button type="button" onClick={toLower} class = "btn mx-3 btn-primary">Lowercase</button>
      <button type="button" onClick={Capitalize} class = "btn  btn-primary">Capitalize</button>
      <button type="button" onClick={Clear} class = "btn mx-3 btn-primary">Clear</button>
      <button type="button" onClick={Reverse} class = "btn  btn-primary">Reverse</button>
      <h2>Text Summary</h2>
      <p>Numder of words : {Text.trim().split(/\s+/).length}</p>
      <p>Numder of charector : {Text.length}</p>
      <p>Time takes to read : {Text.trim().split(/\s+/).length * .008}</p>
      <h2>Text Preview</h2>
      <p>{Text}</p>
    </div>
  )
}

// document.body.style.backgroundColor = "rgb(32, 87, 170)"