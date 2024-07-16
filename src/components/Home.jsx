import React from 'react';
import Topbar from './Home/Topbar';
import TravelSection from './Home/TravelSection';
import NextTrip from './Home/NextTrip';
import FullScreenVideoBackground from './Home/FullScreenVideoBackground';

function Home() {
    return (
        <>
            <Topbar />
            <TravelSection />
            <NextTrip />
            <FullScreenVideoBackground />
        </>
    );
}

export default Home;
