import React from 'react';
import SectionTitle from 'components/SectionTitle';

import './Projects.scss';

const Projects = () => {
    return (
        <div>
            <SectionTitle id="projects">Проекты</SectionTitle>
            <Project />
        </div>
    );
};

const Project = () => (
    <div className="project">
        <p className="project__address">
            г. Москва, ТиНАО, п. Вороновское, д. Сахарово
        </p>
        <h2 className="project__title">
            СТРОИТЕЛЬСТВО АРХИВНОГО КОМПЛЕКСА МОСКВЫ
        </h2>
    </div>
);

export default Projects;
