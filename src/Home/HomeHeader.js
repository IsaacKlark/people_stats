import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <header className="header">

        <h2 className="header__h2">AppCo</h2>
        <h1 className="header__h1">
          <b>Brainstorming</b> for desired perfect Usability
        </h1>
        <p className="header__p">
          Our design projects are fresh and simple and will benefit 
          your business greatly. Learn more about our work!
        </p>
        <Link to="/table" className="header__link"> View Stats </Link>
        <div className="header__phone"></div>
      </header>
    )
}

export default HomeHeader;