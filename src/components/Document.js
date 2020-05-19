import React from 'react';
import SectionTitle from './SectionTitle';

import './Document.scss';

const Document = () => (
    <>
        <SectionTitle id="document">Документы</SectionTitle>
        <div className="document">
            <div className="document__info">
                Компания СтройКонтинент имеет все сертификаты и лицензии на
                соответствующие виды деятельности согласно законодательству
                Российской Федерации.
            </div>
            {new Array(8).fill(null).map((_, i) => (
                <Cert tall={i < 4} key={i} />
            ))}
        </div>
    </>
);

const Cert = ({ tall }) => {
    let className = 'document__cert';
    if (tall) className += '--tall';
    return (
        <div className={className}>
            <div />
            <span>Сертификат соответствия ГОСТ Р ИСО 9001-2015</span>
        </div>
    );
};

export default Document;
