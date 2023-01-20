import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NewProduct from './pages/newProduct/NewProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newProduct" element={<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
