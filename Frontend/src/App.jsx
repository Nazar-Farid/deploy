import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import SuccessPage from './Pages/SuccessPage';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Toaster />
    </Router>
  )
}

export default App