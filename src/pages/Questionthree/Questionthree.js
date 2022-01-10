
// props são passados para o componente (como parâmetros de funções), enquanto state é gerenciado de dentro do componente (como variáveis declaradas dentro de uma função).


// props are passed to the component (as function parameters), while state is managed from within the component (as variables declared within a function).

// Exemplos:

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UsingProps } from './UsingProps'

export const Questionthree = () => {

    const [changeName, setChangeName] = useState('Ola MindMiners')

    const mudar = () => {
        setChangeName('Eduardo Felipe Lovo Dev Fullstack')
    }

    return (
        <div>
            <UsingProps name='Eduardo' />
            <p>{changeName}</p>
            <button type='button' onClick={mudar}>Mudar frase</button>

            <Link to='/'><button>Voltar</button></Link>
        </div>
    )
}
