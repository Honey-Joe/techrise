import React from 'react';

const VideoBackground = () => {
  return (
    <video
      playsInline
      muted
      loop
      autoPlay
      style={{ width: '100%', height: '100vh', objectFit: 'fill' }}
      src="https://raw.githubusercontent.com/Honey-Joe/video/main/uploads/3129576-sd_960_540_30fps.mp4"

      className='absolute z-0'
      id='vid'
    />
  );
};

export default VideoBackground