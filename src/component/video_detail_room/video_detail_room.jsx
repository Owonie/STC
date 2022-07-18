import React, { memo, useCallback } from 'react';
import styles from './video_detail_room.module.css';
import Youtube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';
import {
  updateCurrentTime,
  updateVideoId,
  updateInRoom,
} from '../../reducers/userData';

const VideoDetailInRoom = memo(({ video, video: { snippet } }) => {
  const dispatch = useDispatch();
  const currentTime = useSelector((state) => state.userData.currentTime);
  const userId = useSelector((state) => state.userData.userId);
  const roomId = useSelector((state) => state.userData.roomId);
  const inRoom = useSelector((state) => state.userData.inRoom);
  const playerRef = useRef();

  const _onPlay = useCallback(
    (e) => {
      if (playerRef.current) {
        const time = playerRef.current.getCurrentTime();
        dispatch(updateCurrentTime(time));
      }
    },
    [inRoom]
  );

  useEffect(() => {
    dispatch(updateVideoId(video.id));
  }, [video]);

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
          />
        </div>

        <h2 className={styles.title}>{snippet.title}</h2>
        <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
        <h3 className={styles.description}>{snippet.description}</h3>
      </div>
    </section>
  );
});

export default VideoDetailInRoom;
