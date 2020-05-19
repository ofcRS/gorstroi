import React from 'react';

import CenterBlock from 'components/CenterBlock';

import './Slider.scss';

import './Slider.scss';

const Slider = () => {
    return (
        <div className="slider">
            <CenterBlock>
                <Slide />
            </CenterBlock>
        </div>
    );
};

const Slide = () => {
    return (
        <div className="slide">
            <div className="slide__slide-text">
                <h3 className="slide__slide-text__head">
                    МЫ ЛУЧШАЯ СТРОИТЕЛЬНАЯ КОМПАНИЯ В СВОЕМ СЕГМЕНТЕ
                </h3>
                <p className="slide__slide-text__body">
                    УAловите свое руки мощные вдохновениевкладывает в ваши
                    творческие инструменты, которые обеспечивают абсолютный
                    контроль над текстом. их помощью вы любым элементам тени,
                </p>
            </div>
        </div>
    );
};

export default Slider;
