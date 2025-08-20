import { Routes, Route } from 'react-router-dom';
import Leaderboard from '../pages/Leaderboard';
import Home from '../pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
    </Routes>
  )
};

export default App;
