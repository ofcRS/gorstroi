import React from 'react';

import Header from 'components/Header';
import Slider from 'components/Slider';
import CenterBlock from 'components/CenterBlock';
import Services from 'components/Services';
import Projects from 'components/Projects';
import News from 'components/News';
import About from 'components/About';
import Management from 'components/Management';
import Document from 'components/Document';
import Contacts from 'components/Contacts';
import BottomBlock from 'components/BottomBlock';
import Footer from 'components/Footer';

import './Home.scss';

export const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <CenterBlock>
                <Services />
                <Projects />
                <News />
                <About />
                <Management />
                <Document />
                <Contacts />
            </CenterBlock>
            <BottomBlock />
            <Footer />
        </>
    );
};
