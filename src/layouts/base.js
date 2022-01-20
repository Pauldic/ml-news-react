import React from 'react';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { Pages } from 'pages/routes';

const BaseLayout = ({ children }) => {
  const { pathname } = useLocation();
  const page = Pages.find((page) => page.path === pathname);

  return page.layout ? (
    <>
      {page.header === true && <AppHeader meta={page.meta} />}
      {children}
      <Footer />
    </>
  ) : (
    <>{children}</>
  );
};
export default BaseLayout;
