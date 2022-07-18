import Youtube from 'react-youtube';
import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './youtube_player.module.css';
import { useCallback } from 'react';

const Youtube_Player = ({ inRoom }) => {
  const currentTime = useSelector((state) => state.userData.currentTime);
  const videoId = useSelector((state) => state.userData.videoId);

  return (
    <div className={styles.player}>
      <Youtube
        videoId={videoId}
        className={[styles.video]}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        onReady={(e) => {
          if (videoId && inRoom == false) {
            if (e) {
              e.playVideoAt(currentTime);
            }
          }
        }}
      />
    </div>
  );
};

export default Youtube_Player;
