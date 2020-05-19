import React from 'react';
import SectionTitle from './SectionTitle';

import service1 from 'assets/1x/service_1.png';
import service2 from 'assets/1x/service_2.png';
import service3 from 'assets/1x/service_3.png';
import service4 from 'assets/1x/service_4.png';

import './Services.scss';

const SERVICES = [
    { title: 'ФУНКЦИИ ГЕНЕРАЛЬНОГО ПОДРЯДЧИКА', image: service1 },
    { title: 'КАПИТАЛЬНОЕ СТРОИТЕЛЬСТВО ОБЪЕКТОВ', image: service2 },
    { title: 'ДИЗАЙН И ПРОЕКТИРОВАНИЕ ЗДАНИЙ', image: service3 },
    { title: 'КАПИТАЛЬНЫЙ РЕМОНТ И РЕКОНСТРУКЦИЯ', image: service4 },
];

const Services = () => {
    return (
        <div className="services">
            <SectionTitle id="services">Услуги нашей компании</SectionTitle>
            {SERVICES.map(({ title, image }) => (
                <Service title={title} image={image} key={title} />
            ))}
        </div>
    );
};

const Service = ({ title, image }) => {
    return (
        <div
            className="service"
            style={{
                backgroundImage: `url("${image}")`,
            }}
        >
            <h3>{title}</h3>
        </div>
    );
};

export default Services;
