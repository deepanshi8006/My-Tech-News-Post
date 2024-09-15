import React from 'react';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Stories from './components/Stories';
import './App.css';
// import { AppContext } from './components/Context';
//import { useGlobalContext } from './components/Context';

const App = () => {
  return (
    <>
      <h2 className="text-center mb-4 display-5">
        <span className="text-primary">My</span> Tech News Post
      </h2>
      <Search/>
      <Pagination/>
      <Stories/>
    </>
  )
}

export default App
