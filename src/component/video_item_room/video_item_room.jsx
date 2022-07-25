import React, { memo } from 'react';
import styles from './video_item_room.module.css';
import { useSelector } from 'react-redux';

const VideoItemInRoom = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const playedVideo = useSelector((state) => state.userData.playedVideo);
    const displayType = display === 'list' ? styles.list : styles.grid;
    const selected = video.id === playedVideo.id ? styles.selected : '';

    return (
      <li className={`${styles.container} ${displayType}`}>
        <div className={`${styles.video} ${selected}`}>
          <img
            className={styles.thumbnail}
            src={[snippet.thumbnails.medium.url]}
            alt='thumbnail'
            onClick={() => onVideoClick(video)}
          />
          <div className={[styles.metadata]}>
            <p className={[styles.title]}>{snippet.title}</p>
          </div>
          <button className={styles.remove}>
            <i class='fa-solid fa-square-minus'></i>
          </button>
        </div>
      </li>
    );
  }
);
export default VideoItemInRoom;
