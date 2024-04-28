import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import './index.css';

function App() {

  return (
    <Router>
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Todo List App</h1>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
