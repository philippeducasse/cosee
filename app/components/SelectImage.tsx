'use client'

const SelectImage = ({ image, setImage, setError }) => {

  const fileSelectedHandler = (event: any) => {
    const selectedImage = event.target.files[0];
    console.log({ selectedImage })
    if (selectedImage && (selectedImage.type.includes('img') || selectedImage.type.includes('image'))) {
      setImage(selectedImage);
      setError('');
    } else {
      setImage(null);
      setError('Please select an image file');
    }
  };

  return (
    <div>
      <h1>Upload an Image</h1>
      <input type='file' onChange={fileSelectedHandler} />
      <div className="output">
        {image && (
          <div>
            <img alt="not found" width={'250px'} src={URL.createObjectURL(image)} />
            <br />
            <button onClick={() => { setImage(null); setError('') }}>Remove</button>
          </div>
        )}
        {/* {error && (
          <p className='error'>{error}</p>
        )}
        {progress > 0 && <p>Progress: {progress}%</p>}
      </div>
      {url && <p>Image uploaded successfully!</p>} */}
      </div>
    /</div>
  );
};

export default SelectImage;
