
import './App.css';
import Header from './Components/Header/Header';
import AboutUs from './Section/AboutUs/AboutUs';
import Evocom from './Section/EvoCom/Evocom';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <div className='MAIN_IMAGE_WRAPPER'>
        <Evocom/>
        <AboutUs/>
        </div>
    </div>
  );
}

export default App;
