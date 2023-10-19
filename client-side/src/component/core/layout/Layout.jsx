import React from 'react';
import Navbar from '../../share/navbar/Navbar';
import Footer from '../../share/footer/Footer';
import { Container } from '@chakra-ui/react';

const Layout = ({ children }) => {
    return (
        <>
            <Container maxW='1600px' bg={'white'}>
                <Navbar />
                {children}
                <Footer />
            </Container>
        </>
    );
};

export default Layout;