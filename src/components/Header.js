import React from 'react';
import headerIcon from 'assets/SVG/Ресурс 4.svg';

import './Header.scss';
import Button from 'components/Button';
import CenterBlock from 'components/CenterBlock';
import Menu from './Menu';

const Header = () => {
    return (
        <CenterBlock>
            <div className="header">
                <img src={headerIcon} width={171} height={126} alt={'logo'} />
                <div className="header__right-section">
                    <Address />
                    <Menu />
                </div>
            </div>
        </CenterBlock>
    );
};

const Address = () => {
    return (
        <section className="header__right-section__address-section">
            <div className="header__right-section__address-section__address">
                <a href="tel:+74959871513">+7 (495) 987 1513</a>
                <p>Москва, ул. Верейская, дом 17, офис 301а</p>
                <p>info@gorstroycity.ru</p>
            </div>
            <Button primary>Отправить заявку</Button>
        </section>
    );
};

export default Header;
