import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';

function Home(props) {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default Home;
