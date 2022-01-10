import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export const Home = () => {
    return (
        <div className='bodyHome'>
            <h1>Respostas</h1>
            <div className='buttons'>
                <Link to='/questionOne'><button type='button'>Questão Um</button></Link>
                <Link to='/questionTwo'><button type='button'>Questão Dois</button></Link>
                <Link to='/questionThree'><button type='button'>Questão Três</button></Link>
                <Link to='/questionFor'><button type='button'>Questão Quatro</button></Link>
            </div>
        </div>
    )
}
