
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Shop from './components/Shop.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </Router>
  );

}

export default App;
