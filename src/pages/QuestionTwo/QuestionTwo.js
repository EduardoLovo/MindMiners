import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const QuestionTwo = () => {

    const [message, setMessage] = useState("")

    const addMessage = () => {
        setMessage('message added')
    }

    return (
        <div>
            <p>{message}</p>
            <button type='button' onClick={addMessage}>Add Message</button>

            <Link to='/'><button>Voltar</button></Link>
        </div>
    )
}
