
// codigo em jsx;

// code in jsx;

import React from 'react'
import { Link } from 'react-router-dom'

export const QuestionFor = () => {

    const element = <div style={{ fontSize: "30px" }}>Hello Word</div>

    return (
        <div>
            {element}

            <Link to='/'><button>Voltar</button></Link>

        </div>
    )
}