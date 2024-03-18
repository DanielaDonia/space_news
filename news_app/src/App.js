import './App.css';
import Banner from './componentsLayout/Banner';
import Footer from './componentsLayout/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Error from './pages/Error';
import Blog from './pages/blog'
import Resports from './pages/Reports';
import { ThemeProvider } from './componentsLayout/LightDarkTheme';
import Articles from './pages/Articles';


function App() {

  return (
    <div className="App" >
        <ThemeProvider>
          <Banner />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Articles' element={<Articles/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Reports' element={<Resports/>}/>
           <Route path='*' element={<Error/>} />
        </Routes>
        <Footer />
        </ThemeProvider>
        
     

    </div>
  );
  }


export default App;
