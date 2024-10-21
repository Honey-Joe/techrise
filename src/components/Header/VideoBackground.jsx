import React from 'react';

const VideoBackground = () => {
  return (
    <video
      playsInline
      muted
      loop
      autoPlay
      style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
      src="https://www.pexels.com/video/plexus-of-abstract-geometrical-lines-and-figures-3129576/"

      className='absolute z-0'
    />
  );
};

export default VideoBackground