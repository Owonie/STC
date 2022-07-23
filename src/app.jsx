import styles from './app.module.css';
import Foyer from './component/foyer/foyer';
import { Route, Routes } from 'react-router-dom';
import Room from './component/room/room';
import Sidebar from './component/sidebar/sidebar';
import Video from './component/video_page/video';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.mainbox}>
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
            >
              <Route
                path='index.html'
                element={
                  <Foyer
                    authService={authService}
                    messageRepository={messageRepository}
                    roomRepository={roomRepository}
                  />
                }
              />
            </Route>

            <Route
              path='room'
              element={
                <Room
                  messageRepository={messageRepository}
                  videoRepository={videoRepository}
                />
              }
            />
            <Route
              path='video'
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
