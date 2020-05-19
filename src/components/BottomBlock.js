import React from 'react';

import CenterBlock from 'components/CenterBlock';
import Button from 'components/Button';

import './BottomBlock.scss';

const BottomBlock = () => {
    return (
        <div className="bottom-block">
            <CenterBlock>
                <div className="bottom-block__wrapper">
                    <div className="bottom-block__wrapper__text">
                        МЫ ГОТОВЫ ВОПЛОТИТЬ В ЖИЗНЬ ЛЮБОЙ ВАШ ПРОЕКТ
                    </div>
                    <div className="bottom-block__wrapper__buttons">
                        <Button primary>Заказать звонок</Button>
                        <Button>Отправить заявку</Button>
                    </div>
                </div>
            </CenterBlock>
        </div>
    );
};

export default BottomBlock;
