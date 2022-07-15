import React from 'react';
import VideoDetailInRoom from '../video_detail_room/video_detail_room';
import VideoListInRoom from '../video_list_room/video_list_room';
import styles from './video_box.module.css';

const VideoBox = ({
  videos,
  selectedVideo,
  onVideoClick,
  videoRepository,
  streamMode,
  changeStreamMode,
  changeVideoState,
}) => {
  return (
    <section className={styles.videobox}>
      <div className={styles.container}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetailInRoom
              video={selectedVideo}
              videoRepository={videoRepository}
              streamMode={streamMode}
              changeVideoState={changeVideoState}
            />
          </div>
        )}
        <div className={styles.list}>
          <VideoListInRoom
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? 'list' : 'grid'}
            streamMode={streamMode}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoBox;
