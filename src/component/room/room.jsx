import React, { useEffect, useState } from 'react';
import Chatbox from '../chatbox/chatbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux';
import VideoBox from '../video_box/video_box';
import { updatePlayedVideo, updateLocation } from '../../reducers/userData';
import styles from './room.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Room = ({ messageRepository, videoRepository }) => {
  const roomId = useSelector((state) => state.userData.roomId);
  const inRoom = useSelector((state) => state.userData.inRoom);
  const playedVideo = useSelector((state) => state.userData.playedVideo);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState({});
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const selectVideo = (video) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setSelectedVideo(video);
    dispatch(updatePlayedVideo(video));
  };

  const sendMessage = (message) => {
    messageRepository.saveMessage(message);
  };

  useEffect(() => {
    if (inRoom == false) {
      return;
    }
    const stopSync = messageRepository.syncMessage(roomId, (docs) => {
      setMessages(docs);
    });
    return () => stopSync();
  }, [inRoom, messageRepository]);

  useEffect(() => {
    const stopSync = videoRepository.syncVideoList(roomId, (docs) => {
      setVideos(docs);
    });
    return () => {
      stopSync();
    };
  }, [videoRepository]);

  useEffect(() => {
    dispatch(updateLocation(`room`));
    if (playedVideo != null) {
      setSelectedVideo(playedVideo);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.room}>
      <div className={styles.header}>
        <Header />
      </div>
      {windowSize.width > 767 ? (
        <div className={styles.container}>
          <div className={styles.videoplayer}>
            <VideoBox
              videos={videos}
              selectedVideo={selectedVideo}
              onVideoClick={selectVideo}
              videoRepository={videoRepository}
            />
          </div>
          <div className={styles.chatbox}>
            <Chatbox
              messageRepository={messageRepository}
              sendMessage={sendMessage}
              messages={messages}
            />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <Swiper pagination={true} className={styles.mySwiper}>
            <SwiperSlide>
              <div className={styles.videoplayer}>
                <VideoBox
                  videos={videos}
                  selectedVideo={selectedVideo}
                  onVideoClick={selectVideo}
                  videoRepository={videoRepository}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.chatbox}>
                <Chatbox
                  messageRepository={messageRepository}
                  sendMessage={sendMessage}
                  messages={messages}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </section>
  );
};
export default Room;
