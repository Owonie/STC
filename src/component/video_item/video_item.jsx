import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({
    video,
    video: { snippet },
    onVideoClick,
    display,
    addSelectedVideo,
    mode,
  }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    const displayMode =
      mode === 'videopage' ? styles.videopage : styles.videobox;

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
            <button
              className={[styles.add, { mode }]}
              onClick={() => addSelectedVideo(video)}
            >
              add
            </button>
          </div>
        </div>
      </li>
    );
  }
);
export default VideoItem;
