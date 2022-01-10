import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Respostas</h1>
            <div>
                <Link>
                    <button>Question One</button>
                </Link>
                <Link>
                    <button>Question Two</button>
                </Link>
                <Link>
                    <button>Question Tree</button>
                </Link>
                <Link>
                    <button>Question For</button>
                </Link>

            </div>
        </div>
    )
}
