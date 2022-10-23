import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import Batuan from './components/Batuan';
import Pinjaman from './components/Pinjaman';
import Select from './components/select';
import Selectcard from './components/selectcard';
import Carosel from './components/Carosel'
import Footer from './components/Footer'
import Gis from './Gis'

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
    <Batuan/>
    <Gis/>
    <Pinjaman/>
    <Select/>
    <Selectcard/>
    <Carosel/>
    <Footer/>
    </div>
  );
}

export default App;
