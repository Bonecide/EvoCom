
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Section/AboutUs/AboutUs';
import Amenits from './Section/Amenits/Amenits';
import ChooseUs from './Section/ChooseUs/ChooseUs';
import Contact from './Section/Contact/Contact';
import Evocom from './Section/EvoCom/Evocom';
import Services from './Section/OurServices/Services';
import Partners from './Section/Partners/Partners';

function MainPage() {
  return (
    <div className="App">
      
        <Header/>
        <div className='MAIN_IMAGE_WRAPPER'>
        <Evocom/>
        <AboutUs/>
        <ChooseUs/>
        <Services/>
        <Amenits/>
        <Partners/>
        <Contact/>
        <Footer/>
        </div>
    </div>
  );
}

export default MainPage;
