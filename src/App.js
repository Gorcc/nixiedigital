import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import GrowWithUs from './Components/GrowWithUs';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Prices from './Components/Prices';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <GrowWithUs></GrowWithUs>
      <Prices></Prices>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
