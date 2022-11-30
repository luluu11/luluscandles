import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer/> 
      <Footer/>
    </div>
  );
}

export default App;
