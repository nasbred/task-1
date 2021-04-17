import React from 'react';
// import SearchClient from './SearchClient';
// import CabinetEffectivnosti from './CabinetEffectivnosti';
import './css/Column.css';
import Widget from './Widget';

export default function Column1() {
    return (
        <div className = "column column1">
                <Widget
                    className = 'Widget'
                    additional = 'true'
                    TitleName = 'Поиск клиентов'
                    AdditionalName = 'Расширенный поиск'
                />
                <Widget
                    className = 'WidgetBig'
                    TitleName = 'Кабинет личной эффективности'
                />
        </div>
    )
}

