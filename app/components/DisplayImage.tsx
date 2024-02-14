import React from 'react'
import { DisplayImageProps } from '../page';

const DisplayImage: React.FC<DisplayImageProps>  = ({setImage, image, generatedImage, setGeneratedImage, setError}) => {

  return (
    <div className="flex justify-center my-5">
      {image && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(image)}
          />
          </div>
          )}
          <br />
          {generatedImage && (
            <div>
              <img alt="Generated" width={"250px"} src={generatedImage} />
            </div>
          )}
          <button
            className="block w-full text-md text-black
              mr-4 py-2 px-4 rounded-md
              border-0 
              bg-cosee-g
              hover:bg-green-500"
            onClick={() => {
              setImage(null);
              setGeneratedImage(null);
              setError("");
            }}
          >
            Remove
          </button>
        </div>
  );
}

export default DisplayImage



