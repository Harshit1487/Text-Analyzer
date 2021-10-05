import React, { useState } from 'react'

export const TextForm = (props) => {
    const [Text, setText] = useState("");
    const handleUpperCase = () => {
        let uNewText = Text.toUpperCase();
        setText(uNewText);
        props.showalert("Text Convert to Upper case Successfully.", "success");
    }
    const handleLowerCase = () => {
        let lNewText = Text.toLowerCase();
        setText(lNewText);
        props.showalert("Text Convert to Lower case Successfully.", "success");
    }

    const handleClear = () => {
        setText("");
        props.showalert("Text clear Successfully.", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        var Text = document.getElementById("exampleFormControlTextarea1");
        navigator.clipboard.writeText(Text.value);
        document.getSelection().removeAllRanges();
        props.showalert("Text copy Successfully.", "success");
    }
    const handleExtraSpaces = () => {
        var newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Remove extra spaces Successfully.", "success");
    }
     
    {/*const punc = Text.split(".").length + Text.split(",").length + Text.split(":").length + Text.split(";").length;
document.getElementById("punch").innerHTML=punc;*/}
    return (
        <>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#0a0643' }} >

                <div className="mb-3 my-3">

                    <button type="button" class="btn btn-primary position-relative mx-3 my-2">Sentence
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {Text.split(".").filter((ele)=>{return ele.length!==0}).length}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>

                    <button type="button" class="btn btn-primary position-relative mx-3 my-2">
                        Word
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {Text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>

                    <button type="button" class="btn btn-primary position-relative mx-3 my-2">
                        Character
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {Text.length}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>

                    <button type="button" class="btn btn-primary position-relative mx-3 my-2">
                    Minutes to read text
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {0.008 * Text.split(" ").filter((ele)=>{return ele.length!==0}).length}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>

                    {/*<p style={{ backgroundColor: '#11f8de', width: '60px', padding: '5px', display: 'inline-block' }}>{Text.split(".").length} Sentence</p>*/}
                    
                    <h3 className="my-2">{props.heading}</h3>

                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#0a0643' }} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpperCase}>Convert Upper Case</button>
                <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLowerCase}>Convert Lower Case</button>
                <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear Text</button>
                <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#0a0643' }}>
                
               
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text : "Enter text to preview"}</p>
            </div>

        </>
    )
}
