import React from 'react';

const VideoBackground = () => {
  return (
    <video
      playsInline
      muted
      loop
      autoPlay
      style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
      src="src\assets\bg.mp4"

      className='absolute z-0'
    />
  );
};

export default VideoBackground