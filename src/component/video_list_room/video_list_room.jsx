import VideoItemInRoom from '../video_item_room/video_item_room';
import styles from './video_list_room.module.css';

const VideoListInRoom = ({ videos, onVideoClick, display, mode }) => {
  return (
    <section className={styles.videoList}>
      <div className={styles.container}>
        <ul className={styles.videos}>
          {videos &&
            videos.map((element) => (
              <VideoItemInRoom
                key={element.video.id}
                video={element.video}
                onVideoClick={onVideoClick}
                display={display}
                mode={mode}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};
export default VideoListInRoom;
