import React from 'react';
import VideoDetailInRoom from '../video_detail_room/video_detail_room';
import VideoListInRoom from '../video_list_room/video_list_room';
import styles from './video_box.module.css';

const VideoBox = ({ videos, selectedVideo, onVideoClick, videoRepository }) => {
  return (
    <section className={styles.videobox}>
      <div className={styles.container}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetailInRoom
              video={selectedVideo}
              videoRepository={videoRepository}
            />
          </div>
        )}
        <div className={styles.list}>
          <VideoListInRoom
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoBox;
