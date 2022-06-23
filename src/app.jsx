import styles from './app.module.css';
import Login from './component/login/login';
import Foyer from './component/foyer/foyer';
import { Route, Routes } from 'react-router-dom';
import Header from './component/header/header';

function App({ authService }) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login authService={authService} />} />
        <Route path='/foyer' element={<Foyer authService={authService} />} />
      </Routes>
    </div>
  );
}

export default App;
