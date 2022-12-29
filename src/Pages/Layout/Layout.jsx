import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Componants/Footer/Footer';
import Navbar from '../../Componants/Navbar/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;