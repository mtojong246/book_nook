import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import UserRoute from './routes/User/UserRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='user/*' element={<UserRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
