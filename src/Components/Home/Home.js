import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Trust from '../Trust/Trust';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Trust></Trust>
            <Footer></Footer>
        </div>
    );
};

export default Home;