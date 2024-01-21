import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import GrowWithUs from './Components/GrowWithUs';
import Projects from './Components/Projects';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <GrowWithUs></GrowWithUs>
      <Projects></Projects>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
