import React, { useState } from 'react';
import styles from './video_detail_room.module.css';
import Youtube from 'react-youtube';

const VideoDetailInRoom = ({ video, video: { snippet } }) => {
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
