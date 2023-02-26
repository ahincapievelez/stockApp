import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Stock from './pages/Stock';
import Nav from './components/Nav';
import { useState } from 'react';
import { stocks } from './Data';

function App() {
  
  let [stockList, setStockList] = useState(stocks)

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Dashboard stocks={stockList}/>} />
        <Route path="/home" element={<Dashboard stocks={stockList}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard stocks={stockList}/>} />
        <Route path="/stock/:symbol" element={<Stock stocks={stockList}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
