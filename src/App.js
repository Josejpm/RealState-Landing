import React,{Fragment} from 'react';
import './scss/App.scss';

//Components
import Footer from './components/footer/Footer';
import AboutUs from './components/about/About-Us';
import Header from './components/header/Header'


function App() {
  return (
    <div className="site-container">
        <Header/>
        <AboutUs/>
        <Footer/>
    </div>
  );
}

export default App;
