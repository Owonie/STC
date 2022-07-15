import React from 'react';
import styles from './video_detail_room.module.css';
import Youtube from 'react-youtube';

const VideoDetailInRoom = ({ video, video: { snippet } }) => {
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
      />
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetailInRoom;
