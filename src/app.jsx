import styles from './app.module.css';
import Foyer from './component/foyer/foyer';
import { Route, Routes } from 'react-router-dom';
import Room from './component/room/room';
import Sidebar from './component/sidebar/sidebar';
import Video from './component/video_page/video';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Youtube_Player from './component/youtube_player/youtube_player';

function App({
  authService,
  videoService,
  messageRepository,
  roomRepository,
  videoRepository,
}) {
  return (
    <section className={styles.app}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
          <ToastContainer />
        </div>
        <div className={styles.mainbox}>
          <div
            className={inRoom == true ? styles.player_hidden : styles.player}
          ></div>
          <Routes>
            <Route
              path='/'
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
              element={
                <Room
                  messageRepository={messageRepository}
                  videoRepository={videoRepository}
                />
              }
            />
            <Route
              path='/video'
              element={
                <Video
                  videoService={videoService}
                  videoRepository={videoRepository}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default App;
