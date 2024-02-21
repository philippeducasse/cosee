import React from 'react';

type ProgressBarProps = {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {

  const progressBarClasses = `progress-bar ${progress === 100 ? 'show' : ''}`;
  const successUpload = ` text-2xl self-center ${progress === 100 ? 'show' : 'hide'}`;

  return (
    <div className='mb-5 flex flex-col justify-center'>
      <div className={progressBarClasses} style={{ width: progress + '%' }}></div>
      <p className={successUpload}> Upload completed!</p>
    </div>
  )
}

export default ProgressBar;