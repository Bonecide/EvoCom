
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Section/AboutUs/AboutUs';
import Amenits from './Section/Amenits/Amenits';
import Evocom from './Section/EvoCom/Evocom';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <div className='MAIN_IMAGE_WRAPPER'>
        <Evocom/>
        <AboutUs/>
        <Amenits/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
