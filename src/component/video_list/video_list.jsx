import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({
  videos,
  onVideoClick,
  addSelectedVideo,
  display,
  mode,
}) => {
  const displayMode = mode === 'videopage' ? styles.videopage : styles.videobox;

  return (
    <section className={styles.videoList}>
      <div className={styles.container}>
        <ul className={`${styles.videos} ${displayMode}`}>
          {videos &&
            videos.map((video) => (
              <VideoItem
                key={video.id}
                video={video}
                onVideoClick={onVideoClick}
                addSelectedVideo={addSelectedVideo}
                display={display}
                mode={mode}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};
export default VideoList;
