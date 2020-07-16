import React from 'react';
import './scss/App.scss';

//Components
import Footer from './components/footer/Footer';
import AboutUs from './components/about/About-Us';
import Header from './components/header/Header'
import Properties from './components/properties/Properties';
import Recent from './components/recent/Recent';






function App() {
  return (
      <div className="site-container">
        <Header/>   
        <AboutUs/>
        <Properties/>
        <Recent/>
        <Footer/>
      </div>

  )
}

export default App;

 
