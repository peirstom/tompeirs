import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900 container mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;