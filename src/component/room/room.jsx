import React, { useEffect, useState } from 'react';
import Chatbox from '../chatbox/chatbox';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import styles from './room.module.css';
import Header from '../header/header';
import { useSelector } from 'react-redux';
import VideoBox from '../video_box/video_box';

const Room = ({ messageRepository, videoRepository }) => {
  const roomId = useSelector((state) => state.userData.roomId);
  const videoList = useSelector((state) => state.videoList.myVideoList);
  const navigate = useNavigate();
  const [messages, setMessages] = useState({});
  const [videos, setVideos] = useState([videoList]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [onchat, setOnchat] = useState(true);

  const selectVideo = (video) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setSelectedVideo(video);
  };

  const quitRoom = () => {
    setOnchat(false);
    navigate('/foyer', {
      replace: true,
    });
    console.log('방에서 퇴장했습니다!');
  };

  const sendMessage = (message) => {
    messageRepository.saveMessage(message);
  };

  useEffect(() => {
    if (onchat == false) {
      return;
    }
    const stopSync = messageRepository.syncMessage(roomId, (docs) => {
      setMessages(docs);
    });
    return () => stopSync();
  }, [onchat, messageRepository]);

  useEffect(() => {
    if (onchat == false) {
      return;
    }
    const stopSync = videoRepository.syncVideo(roomId, (docs) => {
      setVideos(docs);
    });
    return () => stopSync();
  }, [onchat, videoRepository]);

  return (
    <section className={styles.room}>
      <div className={styles.header}>
        <Header />
      </div>
      <Button name='Quit' onClick={quitRoom} />
      <div className={styles.container}>
        <div className={styles.videoplayer}>
          <VideoBox
            videos={videoList}
            selectedVideo={selectedVideo}
            onVideoClick={selectVideo}
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
      <footer>이건 채팅방 밑이여</footer>
    </section>
  );
};
export default Room;
