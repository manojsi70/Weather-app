import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weatherapp from './Componets/Weather/Weatherapp';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Weatherapp/>}/>
       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
