import React, { useEffect, useState, useCallback } from 'react';
import styles from './video.module.css';
import SearchHeader from '../search_header/search_header';
import VideoList from '../video_list/video_list';
import VideoDetail from '../video_detail/video_detail';
import { useSelector } from 'react-redux';

function Video({ videoService, videoRepository }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const roomId = useSelector((state) => state.userData.roomId);

  const selectVideo = (video) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setSelectedVideo(video);
  };
  const addSelectedVideo = (video) => {
    videoRepository.saveVideo(video, roomId);
  };
  const search = useCallback(
    (query) => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      setSelectedVideo(null);
      videoService
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [videoService]
  );
  useEffect(() => {
    videoService
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [videoService]);

  const homepage = useCallback(() => {
    setSelectedVideo(null);
    videoService
      .mostPopular() //
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((videos) => setVideos(videos));
  });
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onHomepage={homepage} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            addSelectedVideo={addSelectedVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default Video;
