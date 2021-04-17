import React from 'react';
import robot from './svg/robot.svg';
import searchClient from './svg/searchClient.svg';
import productivnost from './svg/productivnost.svg';
import recomendacii from './svg/recomendacii.svg';
import novosti from './svg/novosti.svg';
import vstrechy from './svg/vstrechi.svg';

const Icon = ({name}) => {
    switch(name){
        case 'search':
            return(
                <img src={searchClient}/>
            )
        case 'robot':
            return(
                <img src={robot}/>
            )
        case 'productivnost':
            return(
                <div className = 'TableRowTitleIcon'>
                    <img src={productivnost} className = 'TableRowTitleIcon'/>
                </div>
            )
        case 'recomendacii':
            return(
                <div className = 'TableRowTitleIcon'>
                    <img src={recomendacii} className = 'TableRowTitleIcon'/>
                </div>
            )
        case 'vstrechy':
            return(
                <div className = 'TableRowTitleIcon'>
                    <img src={vstrechy} className = 'TableRowTitleIcon'/>
                </div>
            )
        case 'novosti':
            return(
                <div className = 'TableRowTitleIcon'>
                    <img src={novosti} className = 'TableRowTitleIcon'/>
                </div>
            )

        default:
            return null;
    }
}

export default Icon;