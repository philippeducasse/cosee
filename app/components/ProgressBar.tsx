import React from 'react';
import { useEffect } from 'react';

type ProgressBarProps = {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {

  const progressBarClasses = `progress-bar ${progress === 100 ? 'hide' : ''}`;
  const successUpload = `${progress === 100 ? 'show' : 'hide'}`;

  return (
    <>
      <div className={progressBarClasses} style={{ width: progress + '%' }}></div>
      <p className={successUpload}> Upload Successful!</p>

    </>
  )
}

export default ProgressBar;