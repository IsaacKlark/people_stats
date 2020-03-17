import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  )
}

export default Home;