import React from 'react';
import VideoDetail from '../video_detail/video_detail';
import VideoList from '../video_list/video_list';
import styles from './video_box.module.css';

const VideoBox = ({ videos, selectedVideo, onVideoClick }) => {
  return (
    <section className={styles.videobox}>
      <div className={styles.container}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} mode={'videobox'} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? 'list' : 'grid'}
            mode={'videobox'}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoBox;
