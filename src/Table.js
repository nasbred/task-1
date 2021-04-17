import React from 'react';
import Icon from './Icon';
import MicroRow from './MicroRow';
import MicroColumn from './MicroColumn';
import './css/Table.css';
import './css/MicroRow.css'
import './css/MicroColumn.css'
import './css/colors.css'

export default function Table() {
    return (
        <div className = "Table">
            <div className = "TableRow">
                <div className = "TableRowTitle">
                    <div className = "TableRowTitleText">Продуктивность</div>
                    <div className = "TableRowTitleComment">на Март</div>
                    <Icon name = "productivnost"/>
                </div>
                <div className = 'TableRowContentContainer'>
                    <div className = 'MicroColumnContainer MicroColumnContainerFirst green'>
                        <MicroColumn name='Ваша' value='0,69'/>
                    </div>
                    <div className = 'MicroColumnContainer'>
                        <MicroColumn name='Кластер' value='0,6'/>
                    </div>
                    <div className = 'MicroRowBoxRowContainer'>
                        <MicroRow name='Коэфф.личной эффективности'/>
                        <MicroRow value='1,25'/>
                    </div>
                </div>
            </div>
            <div className = "TableRow">
                <div className = "TableRowTitle">
                    <div className = "TableRowTitleText">Рекомендации</div>
                    <div className = "TableRowTitleComment">15-19 Марта</div>
                    <Icon name = "recomendacii"/>
                </div>
                <div className = 'TableRowContentContainer'>
                    <div className = 'MicroColumnContainer MicroColumnContainerFirst'>
                        <MicroColumn name='Всего' value='11'/>
                    </div>
                    <div className = 'MicroColumnContainer blue'>
                        <MicroColumn name='Новых' value='8'/>
                    </div>
                    <div className = 'MicroColumnContainer red'>
                        <MicroColumn name='Просрочено' value='6'/>
                    </div>
                </div>
            </div>
            <div className = "MiniRows">
                <div className = "MiniRow">
                    <div className = "TableRowTitle">
                        <div className = "TableRowTitleText">Встречи</div>
                        <Icon name = "vstrechy"/>
                    </div>
                    <div className = 'MicroRowContainer'>
                        <MicroRow name='Сегодня' value = '3'/>
                        <MicroRow name='Завтра' value = '0'/>
                    </div>
                </div>
                <div className = "MiniRow">
                    <div className = "TableRowTitle">
                        <div className = "TableRowTitleText">Новости</div>
                        <Icon name = "novosti"/>
                    </div>
                    <div className = 'MicroRowContainer OnlyValue'>
                        <MicroRow name='Не прочитано'/>
                        <MicroRow value='2'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
