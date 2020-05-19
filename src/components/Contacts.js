import React from 'react';
import SectionTitle from 'components/SectionTitle';

import location from 'assets/SVG/location.svg';
import email from 'assets/SVG/email.svg';
import phone from 'assets/SVG/phone.svg';
import qr from 'assets/SVG/qr.svg';

import './Contacts.scss';

const icons = [
    {
        text: '121357, Россия, Москва ул. Верейская 17, офис 301а',
        image: location,
    },
    {
        text: '+7 (495) 987 1513',
        image: phone,
        href: 'tel:+74959871513',
    },
    {
        text: 'info@gorstroysity.ru',
        image: email,
    },
];

const Contacts = () => (
    <>
        <SectionTitle id="contacts">Контакты</SectionTitle>
        <div className="contacts">
            <span className="contacts__title">ООО «ГорСтройСити»</span>
            <IconsBlock />
            <div className="contacts__qr">
                <div className="contacts__qr__info">
                    ОТСКАНИРУЙТЕ, ЧТОБЫ ДОБАВИТЬ ИНФОРМАЦИЮ В{' '}
                    <span>КОНТАКТЫ</span>
                </div>
                <img alt="qr" src={qr} width={155} />
            </div>
        </div>
    </>
);

const IconsBlock = () => (
    <div className="contacts__icons">
        {icons.map((icon) => (
            <Icon key={icon.image} {...icon} />
        ))}
    </div>
);

const Icon = ({ image, text, href }) => {
    const info = href ? <a href={href}>{text}</a> : text;
    return (
        <div className="contacts__icons__icon">
            <img width={35} src={image} alt={image} /> {info}
        </div>
    );
};

export default Contacts;
