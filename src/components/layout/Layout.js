import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="text-gray-900 container mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;