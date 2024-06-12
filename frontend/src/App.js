
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import Signup from './screens/Signup';
import Login from './screens/Login';
import DiseasePredict from './screens/DiseasePredict';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>

          <Route exact path="/predict" element={<DiseasePredict/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
