import React, { useEffect, useState, useCallback } from 'react';
import styles from './music.module.css';
import SearchHeader from '../search_header/search_header';
import VideoList from '../video_list/video_list';
import VideoDetail from '../video_detail/video_detail';

function Music({ musicService }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setSelectedVideo(video);
  };
  const search = useCallback(
    (query) => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      setSelectedVideo(null);
      musicService
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [musicService]
  ); // mount 됐을때만 호출이 된다.

  useEffect(() => {
    musicService
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [musicService]);

  const homepage = useCallback(() => {
    setSelectedVideo(null);
    musicService
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
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default Music;
