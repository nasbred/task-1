import React from 'react';
// import Queue from './Queue';
// import Tasks from './Tasks';
// import Oprosy from './Oprosy';
import Widget from './Widget';
import './css/Column.css';

export default function Column2() {
    return (
        <div className = "column column2">
                <Widget
                    className = 'Widget'
                    additional = 'true'
                    TitleName = 'Очередь'
                    AdditionalName = 'Пульт оператора'
                />
                <Widget
                    className = 'Widget'
                    additional = 'true'
                    TitleName = 'Задачи'
                    AdditionalName = 'Перейти к задачам'
                />
                <Widget
                    className = 'Widget'
                    TitleName = 'Опросы'
                />
        </div>
    )
}
