import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>Respostas</h1>
            <div>
                <Link to='/questionOne'><button>Questão Um</button></Link>
                <Link to='/questionTwo'><button>Questão Dois</button></Link>
            </div>
        </div>
    )
}
