import React from 'react';
import './homePage.css';

const HomePage = () => {
  const aboutData = {
    section: 'about-app',
    title: 'Welcome to our page!',
    description:
            'React Calculator sole focus is to provide fast, comprehensive, convenient, free online calculators in a plethora of areas. Currently, we have around easy solutions to help you "do the math" quickly in areas such as finance, fitness, health, math, and others, and we are still developing more. Our goal is to become the one-stop, go-to site for people who need to make quick calculations. Additionally, we believe the internet should be a source of free information. Therefore, all of our tools and services are completely free, with no registration required. We coded and developed each calculator individually and put each one through strict, comprehensive testing. However, please inform us if you notice even the slightest error – your input is extremely valuable to us.',
  };

  return (
        <div className="homeContainer">
          <div className="homeInnerContainer">

          <h1 className="homeTitle">{aboutData.title}</h1>
          <p>{aboutData.description}</p>
          </div>
        </div>
  );
};
export default HomePage;