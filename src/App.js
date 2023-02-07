import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Taskovi from './pages/Taskovi';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/taskovi" element={<Taskovi />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
