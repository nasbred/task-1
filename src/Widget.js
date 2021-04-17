import React from 'react';
import './css/Widget.css';
import Data from './Data';

export default function Widjet(props) {
    return (
        <div className = {props.className}> 
            <div className = 'Title'>
                <div className = 'TitleText'>{props.TitleName}</div>
                {props.additional === 'true' && <div className = 'TitleLink'>{props.AdditionalName}</div>}
            </div>
            <Data name = {props.TitleName}/>
        </div>
    )
}
