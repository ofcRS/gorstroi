import React from 'react';

import SectionTitle from 'components/SectionTitle';

import './Management.scss';

import person from 'assets/1x/person_1.png';

const PERSONS = [
    {
        name: 'Иванов Андрей Дмитревич',
        title: 'Генеральный директор',
        description: 'Основатель компании Главный в решениях важных вопросов',
        image: person,
    },
    {
        name: 'Смирнов Алексей Викторович',
        title: 'Исполнительный директор',
        description: 'Главный в решениях юридических вопросов',
        image: person,
    },
];

const Management = () => (
    <>
        <SectionTitle id="management">Руководство</SectionTitle>
        <div className="management">
            {PERSONS.map((person) => (
                <Person {...person} key={person.title} />
            ))}
        </div>
    </>
);

const Person = ({ name, title, description, image }) => {
    return (
        <div className="management__person">
            <div className="management__person__image-wrapper">
                <img src={image} alt={name} width={280} />
            </div>
            <div className="management__person__text">
                <h4 className="management__person__text__name">{name}</h4>
                <p className="management__person__text__title">{title}</p>
                <p className="management__person__text__description">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Management;
