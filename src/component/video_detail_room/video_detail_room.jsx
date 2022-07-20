import React, { useCallback, useEffect, useRef } from 'react';
import styles from './video_detail_room.module.css';
import Youtube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentTime } from '../../reducers/userData';

const VideoDetailInRoom = ({ video, video: { snippet } }) => {
  const dispatch = useDispatch();
  const currentTime = useSelector((state) => state.userData.currentTime);
  const inRoom = useSelector((state) => state.userData.inRoom);
  const playerRef = useRef();

  const _onPlay = useCallback(
    (e) => {
      if (playerRef.current && currentTime) {
        const time = playerRef.current.getCurrentTime();
        dispatch(updateCurrentTime(time));
      }
    },
    [inRoom]
  );
  const _onReady = useCallback((e) => {
    currentTime && e.seekTo(currentTime);
    e.playVideo();
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', _onPlay);
    return () => {
      const time = playerRef.current.getCurrentTime();
      dispatch(updateCurrentTime(time));
    };
  }, []);

  return (
    <section className={styles.detail}>
      <div className={styles.videobox}>
        <div className={styles.player}>
          <Youtube
            videoId={video.id}
            className={[styles.video]}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onStateChange={(e) => {
              playerRef.current = e.target;
            }}
            onPlay={(e) => {
              if (!inRoom) {
                _onPlay(e.target);
              }
            }}
            onReady={(e) => {
              _onReady(e.target);
            }}
          />
        </div>

        <h2 className={styles.title}>{snippet.title}</h2>
        <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
        <h3 className={styles.description}>{snippet.description}</h3>
      </div>
    </section>
  );
};

export default VideoDetailInRoom;
