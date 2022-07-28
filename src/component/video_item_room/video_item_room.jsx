import React, { memo, useEffect, useState } from 'react';
import styles from './video_item_room.module.css';
import { useSelector } from 'react-redux';

const VideoItemInRoom = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const playedVideo = useSelector((state) => state.userData.playedVideo);
    const displayType = display === 'list' ? styles.list : styles.grid;
    const [style, setStyle] = useState();
    useEffect(() => {
      if (playedVideo != null) {
        if (video.id === playedVideo.id) {
          setStyle(styles.selected);
        } else {
          setStyle();
        }
      }
    }, [playedVideo]);

    return (
      <li className={`${styles.container} ${displayType}`}>
        <div className={`${styles.video} ${style}`}>
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
