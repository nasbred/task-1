import React from 'react'

export default function MicroRow(props) {
    return (
        <div className = "MicroRow">
            {props.name && <div className = "MicroRowName">{props.name}</div>}
            {props.value && <div className = "MicroRowValue">{props.value}</div>}
        </div>
    )
}
