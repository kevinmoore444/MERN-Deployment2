import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './components/Display';
import Create from './components/Create';
import Update from './components/Update';
import Details from './components/Details';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<Display/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
