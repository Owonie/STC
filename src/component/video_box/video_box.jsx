import React from 'react';
import VideoDetail from '../video_detail/video_detail';
import VideoListInRoom from '../video_list_room/video_list_room';
import styles from './video_box.module.css';

const VideoBox = ({ videos, selectedVideo, onVideoClick }) => {
  console.log(`videos in video box:`, videos);

  return (
    <section className={styles.videobox}>
      <div className={styles.container}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} mode={'videobox'} />
          </div>
        )}
        <div className={styles.list}>
          <VideoListInRoom
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
