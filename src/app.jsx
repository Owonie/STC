import styles from './app.module.css';
import Login from './component/login/login';
import Foyer from './component/foyer/foyer';
import { Route, Routes } from 'react-router-dom';
import Header from './component/header/header';

function App({ authService, chatService, messageRepository, roomRepository }) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login authService={authService} />} />
        <Route
          path='/foyer'
          element={
            <Foyer
              authService={authService}
              chatService={chatService}
              messageRepository={messageRepository}
              roomRepository={roomRepository}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
