import React from 'react';
import Icon from './Icon';
import Table from './Table';
import './css/RowContainer.css';
import './css/InputContainer.css';
import './css/WidgetBigContainer.css';


const Data = ({name}) => {
    switch(name){
        case 'Поиск клиентов':
            return(
                <div className = 'InputContainer'>
                    <input className='Input' type = 'text' placeholder = 'Серия и номер документа'/>
                    <div className= "InputIcon">
                        <Icon name="search"/>
                    </div>
                </div>
            )
        case 'Кабинет личной эффективности':
            return(
                <div className = "Container">
                    <div className = "robot">
                        <Icon name = "robot"/>
                    </div>
                    <Table/>
                </div>
            )
            case 'Очередь':
                return(
                    <div className = 'RowContainer'>
                    <div className = "Row OnlyOneRow">
                        <div className = "RowName">Никого нет</div>
                        <div className = "RowValue"></div>
                    </div>
                </div>
                )
            case 'Задачи':
                return(
                    <div className = 'RowContainer'>
                        <div className = "Row RowFirst">
                            <div className = "RowName">В работе</div>
                            <div className = "RowValue">0</div>
                        </div>
                        <div className = "Row">
                            <div className = "RowName">Приостановленные</div>
                            <div className = "RowValue">99</div>
                        </div>
                    </div>
                )
            case 'Опросы':
                return(
                    <div className = "InDevelopment">
                        Функционал в разработке
                    </div>
                )
            default:
                return null;
    }
}

export default Data;