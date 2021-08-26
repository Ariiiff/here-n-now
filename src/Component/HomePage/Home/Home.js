import React from 'react';
import NavBar from '../../SharedItem/NavBar/NavBar';
// import ClientFeedback from '../ClientFeedback/ClientFeedback';
import ContactSection from '../ContactSection/ContactSection';
import MainHeader from '../MainHeader/MainHeader';
import OurClient from '../MainHeader/OurClient/OurClient';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import './Home.css';


const Home = () => {
    return (
        <div className='container'>
            <div className="header-background">
                <NavBar></NavBar>
                <MainHeader></MainHeader>
            </div>
            <div>
                <OurClient></OurClient>
                <Services></Services>
                <OurWorks></OurWorks>
                {/* <ClientFeedback></ClientFeedback> */}
                <ContactSection></ContactSection>
            </div>
        </div>
    );
};

export default Home;