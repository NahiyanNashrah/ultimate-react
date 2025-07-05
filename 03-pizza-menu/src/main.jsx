import React from 'react';
import ReactDom from 'react-dom/client';
import './assets/index.css';
// import Pizza from './components/Pizza';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/Menu';

function App() {
  return <div className='container'><Header></Header><Menu /> <Footer></Footer></div>
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);