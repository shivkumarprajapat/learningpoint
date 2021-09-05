import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function TextForm() {
    const [text, setText] = useState("initialState")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClClick = () => {
        setText("")
    }
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={5} value={text} onChange={handleChange} />
                </Form.Group>
                <Button className='mr-2' variant="primary" onClick={handleUpClick}>Uppercase</Button>
                <Button className='mr-2' variant="primary" onClick={handleLoClick}>Lovercase</Button>
                <Button className='mr-2' variant="primary" onClick={handleClClick}>Clear</Button>
            </Form>
        </div>
    )
}
