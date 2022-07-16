import React, { memo } from 'react';
import styles from './video_item_room.module.css';

const VideoItemInRoom = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
      <li className={`${styles.container} ${displayType}`}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={[snippet.thumbnails.medium.url]}
            alt='thumbnail'
            onClick={() => onVideoClick(video)}
          />
          <div className={[styles.metadata]}>
            <p className={[styles.title]}>{snippet.title}</p>
          </div>
        </div>
      </li>
    );
  }
);
export default VideoItemInRoom;
