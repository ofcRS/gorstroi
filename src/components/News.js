import React from 'react';
import SectionTitle from 'components/SectionTitle';

import './News.scss';

import image from 'assets/1x/news_image.png';

const News = () => (
    <>
        <SectionTitle id="news">Новости</SectionTitle>
        <div className="news">
            <h3 className="news__title">Запущен новый проект</h3>
            <p className="news__body">
                Наша компания начнает строительство современного,
                роботизированного Архивного Комплекса Москвы площадью 52 000 м2
                в п. Вороновское. Объект будет размещается в северо-западной
                части территории ГБУ «Многофункциональный миграционный центр».
                Архивохранилище состоит из 14 роботизированных модулей хранения
                вместимостью 2,83 млн. EX каждый. Данный проект выполняет
                следубщие заачи: обеспечение нормативных требований хранения
                документов, защита персональных данных и ликвидация
                разрозненности архивных фондов. Сроки реализации проекта:
                2020-2021 год.
                <div className="news__details">
                    Более подробная информация о проекте по{' '}
                    <a href="/">ссылке</a>
                </div>
            </p>
            <span className="news__date">20 апреля 2020 год</span>
            <div className="news__image-block">
                <img src={image} alt={'Изображение'} />
            </div>
        </div>
    </>
);

export default News;
