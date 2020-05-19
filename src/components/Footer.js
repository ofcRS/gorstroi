import React from 'react';
import CenterBlock from 'components/CenterBlock';
import Menu from 'components/Menu';

import vk from 'assets/SVG/vk_icon.svg';
import fb from 'assets/SVG/fb_icon.svg';
import inst from 'assets/SVG/inst_icon.svg';
import viber from 'assets/SVG/viber_icon.svg';

import './Footer.scss';

const SOCIAL_LINKS = [vk, fb, inst, viber];

const Footer = () => {
    return (
        <div className="footer">
            <CenterBlock>
                <div className="footer__wrapper">
                    <div className="footer__right-block">
                        <Menu primary />
                        <div>
                            © {new Date().getFullYear()} ООО «ГорСтройСити»
                        </div>
                    </div>
                    <SocialLinks />
                </div>
            </CenterBlock>
        </div>
    );
};

const SocialLinks = () => {
    return (
        <div className="footer__social-links">
            {SOCIAL_LINKS.map((icon) => (
                <a href={'/'} key={icon}>
                    <img width={50} src={icon} alt={''} />
                </a>
            ))}
        </div>
    );
};

export default Footer;
