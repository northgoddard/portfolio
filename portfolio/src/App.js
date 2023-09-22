import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import './App.css';
import Page from './components/page.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
