
// Irá retornar uma div com o fundo verde escrito 'Esta é uma tela' e 'Texto personalizado aqui'.

// Will return a div with the background green written 'This is a screen' and 'Custom text here'.


import React from 'react'
import { ComponentOne } from './ComponentOne'

export const QuestionOne = () => {
    return (
        <div>
            <ComponentOne color="green" text="Custom text here" />
        </div>
    )
}
