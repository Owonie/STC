import React, { memo } from 'react';
import styles from './video_item_room.module.css';

const VideoItemInRoom = memo(
  ({ video, video: { snippet }, onVideoClick, display, mode }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    const displayMode = mode === 'bright' ? styles.bright : styles.dark;

    return (
      <li className={`${styles.container} ${displayType} ${displayMode}`}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={[snippet.thumbnails.medium.url]}
            alt='thumbnail'
            onClick={() => onVideoClick(video)}
          />
          <div className={[styles.metadata, { mode }]}>
            <p className={[styles.title, { mode }]}>{snippet.title}</p>
            <p className={[styles.channel, { mode }]}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);
export default VideoItemInRoom;
