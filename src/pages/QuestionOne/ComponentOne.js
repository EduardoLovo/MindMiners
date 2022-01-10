import React from 'react'

export const ComponentOne = (props) => {

    return (
        <div style={{ backgroundColor: props.color }} >
            This is a sreen<br />{props.text}
        </div>
    )
}