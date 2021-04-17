import React from 'react'

export default function MicroColumn(props) {
    return (
        <div className = "MicroColumn">
            {props.name && <div className = "MicroColumnName">{props.name}</div>}
            {props.value && <div className = "MicroColumnValue">{props.value}</div>}
        </div>
    )
}
