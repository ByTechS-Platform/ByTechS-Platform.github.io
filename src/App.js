import { useState } from 'react';
import './App.scss';
import ContactUs from './Components/ContactUs';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import News from './Components/News';
import FollowUs from './Components/FollowUs';
import Footer from './Components/Footer';

function App() {

   const [isLightMode, setIsLightMode] = useState(false);
   const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="App">
      <NavBar isLightMode={isLightMode} activeSection={activeSection} />
      <Hero />
      <ContactUs />
      <News />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;