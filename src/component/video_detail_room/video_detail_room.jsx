import React from 'react';
import styles from './video_detail_room.module.css';
import Youtube from 'react-youtube';
import { useSelector } from 'react-redux';
const VideoDetailInRoom = ({
  video,
  video: { snippet },
  streamMode,
  changeVideoState,
}) => {
  const userId = useSelector((state) => state.userData.userId);
  const masterId = useSelector((state) => state.userData.masterId);
  const videoState = useSelector((state) => state.userData.videoState);
  const _onPlay = (e) => {
    if (masterId != userId) {
      if (videoState == 2) {
        e.target.pauseVideo();
      }
    }
  };
  const _onEnd = (e) => {
    if (videoState != 1) {
    }
  };
  const _onPause = (e) => {
    if (masterId != userId) {
      if (videoState == 1) {
        e.target.playVideo();
      }
    }
  };
  const _onReady = (e) => {
    if (videoState != 1) {
    }
  };

  return (
    <section className={styles.detail}>
      <Youtube
        videoId={video.id}
        className={[styles.video]}
        opts={{
          width: '560',
          height: '315',
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
          },
        }}
        onStateChange={(e) => {
          changeVideoState(e.data);
        }}
        onEnd={(e) => {
          _onEnd(e);
        }}
        onPlay={(e) => {
          _onPlay(e);
        }}
        onPause={(e) => {
          _onPause(e);
        }}
        onReady={(e) => {
          _onReady(e);
        }}
      />
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetailInRoom;
