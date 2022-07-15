import React, { useEffect, useState } from 'react';
import Chatbox from '../chatbox/chatbox';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import styles from './room.module.css';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux';
import { updateVideoState } from '../../reducers/userData';
import VideoBox from '../video_box/video_box';

const Room = ({ messageRepository, videoRepository }) => {
  const roomId = useSelector((state) => state.userData.roomId);
  const userId = useSelector((state) => state.userData.userId);
  const masterId = useSelector((state) => state.userData.masterId);
  const videoState = useSelector((state) => state.userData.videoState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [streamMode, setStreamMode] = useState(false); // true -> streaming mode || false -> split mode
  const [messages, setMessages] = useState({});
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [onchat, setOnchat] = useState(true);

  const selectVideo = (video) => {
    // 방장만 비디오 선택을 업데이트 할 수 있다.
    window.scrollTo({ top: 0, behavior: 'auto' });
    setSelectedVideo(video);
    if (streamMode == true && masterId == userId) {
      videoRepository.saveVideoId(video, roomId);
    }
  };
  const changeStreamMode = () => {
    setStreamMode(!streamMode);
    if (streamMode == true) {
      console.log(`stream!`);
    } else {
      console.log(`split!`);
    }
  };

  const changeVideoState = (state) => {
    if (masterId == userId) {
      // 방장만 스트리밍 용 플레이어의 상태를 업데이트 할 수 있다.
      videoRepository.saveVideoState(state, roomId);
    }
  };

  const quitRoom = () => {
    setOnchat(false);
    navigate('/foyer', {
      replace: true,
    });
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
    const stopSync = videoRepository.syncVideoList(roomId, (docs) => {
      setVideos(docs);
    });
    return () => stopSync();
  }, [videoRepository]);

  useEffect(() => {
    const stopSync = videoRepository.syncVideoState(roomId, (doc) => {
      dispatch(updateVideoState(doc.State));
      console.log(`doc.state:`, doc.State);
    });
    return () => stopSync();
  }, [videoRepository]);

  useEffect(() => {
    const stopSync = videoRepository.syncVideoId(roomId, (doc) => {
      if (streamMode == true && masterId != userId) {
        setSelectedVideo(doc.State);
        console.log(`videoId:`, doc.State);
      }
    });
    return () => stopSync();
  }, [videoRepository]);

  return (
    <section className={styles.room}>
      <div className={styles.header}>
        <Header />
      </div>
      <button className={styles.streammode} onClick={changeStreamMode}>
        {streamMode === true ? 'mode : combine' : 'mode : split'}
      </button>
      <Button name='Quit' onClick={quitRoom} />
      <div className={styles.container}>
        <div className={styles.videoplayer}>
          <VideoBox
            videos={videos}
            selectedVideo={selectedVideo}
            onVideoClick={selectVideo}
            videoRepository={videoRepository}
            streamMode={streamMode}
            videoState={videoState}
            changeVideoState={changeVideoState}
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
