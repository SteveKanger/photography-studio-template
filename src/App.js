import React, { Component } from 'react';
import MenuButton from './components/MenuButton';
import Menu from './components/Menu';
import Home from './components/Home';
import Featured from './components/Featured';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MenuButton />
        <Home />
        <div style={{ marginTop: '100vh' }} />
        <Featured />
        <Gallery />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
