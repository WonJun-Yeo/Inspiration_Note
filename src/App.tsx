import React from 'react';
import './App.css';
import './styles/reset.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Header />
    {/* Main */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
