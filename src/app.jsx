import styles from './app.module.css';
import Login from './component/login/login';
import Foyer from './component/foyer/foyer';
import { Route, Routes } from 'react-router-dom';
import Room from './component/room/room';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/header/header';
import Music from './component/recordshop/music';

function App({ authService, musicService, messageRepository, roomRepository }) {
  return (
    <section className={styles.app}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.mainbox}>
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
            <Route
              path='/music'
              element={<Music musicService={musicService} />}
            />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default App;
