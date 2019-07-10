import React from 'react';

const VideoItem = ({ video }) => {
    console.log(video);
    return (
      <div>
        <img src={video.snippet.thumbnails.medium.url} />
        <div>{video.snippet.title}</div>
      </div>
    );
};

export default VideoItem;
