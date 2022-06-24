import styles from './app.module.css';
import Login from './component/login/login';
import Foyer from './component/foyer/foyer';
import { Route, Routes } from 'react-router-dom';
import Header from './component/header/header';
import Room from './component/room/room';

function App({ authService, messageRepository, roomRepository }) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login authService={authService} />} />
        <Route
          path='/foyer'
          element={
            <Foyer
              authService={authService}
              messageRepository={messageRepository}
              roomRepository={roomRepository}
            />
          }
        />
        <Route
          path='/room'
          element={<Room messageRepository={messageRepository} />}
        />
      </Routes>
    </div>
  );
}

export default App;
