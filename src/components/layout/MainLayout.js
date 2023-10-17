import Header from 'components/reusable/parts/Header';
import SideNav from 'components/reusable/parts/SideNav';
import React from 'react';

const MainLayout = ({childern}) => {
  return (
    <>
      <Header />
      {childern}
      <SideNav />
    </>
  );
}

export default MainLayout;
