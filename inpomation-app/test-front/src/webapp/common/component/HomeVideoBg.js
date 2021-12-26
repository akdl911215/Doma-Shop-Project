import React, { useEffect, useState } from 'react';

import dataCounters from 'webapp/common/data/Counters/counters-data.json';
import dataServices from 'webapp/common/data/Services/services-minimal-data.json';
import dataTestimonials from 'webapp/common/data/Testimonials/testimonials-data.json';
import dataTeam from 'webapp/common/data/Team/team-data.json';

// Images
import homeHockney from 'webapp/images/home/homeHockney.jpg';
import imgWhatWeDo from 'webapp/images/EYE.jpg';
// Components

import HeaderOneMain from 'webapp/common/component/Navbar/HeaderOneMain';
import HeroHomeVideo from 'webapp/common/HeroSlider/HeroHomeVideo';
import WhatWeOfferEleven from '../WhatWeOffer/WhatWeOfferEleven';
import WhatWeDoOne from '../WhatWeDo/WhatWeDoOne';
import TestimonialsOne from '../Testimonials/TestimonialsOne';
import TeamOne from '../Team/TeamOne';
import FooterOne from '../Footer/FooterOne';
import CountersOne from '../Counters/CountersOne';
import Loader from '../Loader/Loader';

const HomeVideoBg = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const checkLogin = () => {
        const loginValue = JSON.parse(localStorage.getItem(loginInfo));

        setLoginInfo(loginValue);
    };

    useEffect(checkLogin, []);

    return (
        <Loader>
            <HeaderOneMain />

            <HeroHomeVideo tagline="Welcome to" title="DomaShop_batazon" />

            <WhatWeOfferEleven data={dataServices} tagline="" title="" text="" textImg="" image={homeHockney} />

            <CountersOne data={dataCounters} classes="pt-0" />
            <WhatWeDoOne tagline="What We Do" title="도매 " image={imgWhatWeDo} classes="no-bottom-line">
                판매자들을 위한 공간입니다. 더 좋은 조건 좋은 제품을 제공받으실 수 있도록 노력하겠습니다
            </WhatWeDoOne>
            <TestimonialsOne data={dataTestimonials} />
            <TeamOne tagline="Meet Creatives" title="Our Team" data={dataTeam} />
            <FooterOne />
        </Loader>
    );
};

export default HomeVideoBg;
