import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Convert to UpperCase","success")
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Convert to LoverCase","success")
    }
    const handleClClick = () => {
        setText("")
    }
    const handleCPClick = () => {
        console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy Text","success")
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Remove Extra Spaces","success")
        }
        

    return (
        <div className='row'>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" id='myBox' rows={5} value={text} onChange={handleChange} />
                </Form.Group>
                <div className="mt-3">
                    <Button className='mr-2' variant="primary" onClick={handleUpClick}>Uppercase</Button>
                    <Button className='mr-2' variant="primary" onClick={handleLoClick}>Lovercase</Button>
                    <Button className='mr-2' variant="primary" onClick={handleClClick}>Clear</Button>
                    <Button className='mr-2' variant="primary" onClick={handleCPClick}>Copy Text</Button>
                    <Button onClick={handleExtraSpaces}>Remove extra spaces</Button>
                </div>
            </Form>
            <div className="lenth">
                <h3><b>{text.split(" ").length}</b> words <b>{text.length}</b> characters</h3>
            </div>
            <div className="prev">
                <p>{text}</p>
            </div>
        </div>
    )
}
