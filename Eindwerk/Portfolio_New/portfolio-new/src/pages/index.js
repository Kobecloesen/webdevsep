import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { HomeObj1, HomeObj2, HomeObj3, HomeObj4, HomeObj5, HomeObj6} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...HomeObj1}/>
            <InfoSection {...HomeObj2}/>
            <InfoSection {...HomeObj3}/>
            <InfoSection {...HomeObj4}/>
            <InfoSection {...HomeObj5}/>
            <InfoSection {...HomeObj6}/>
            <Footer />
        </>
    )
}

export default Home;
