import React from 'react'
import { DisplayImageProps } from '../Types';

const DisplayImage: React.FC<DisplayImageProps>  = ({setImage, image, generatedImage, setGeneratedImage, setError}) => {

  return (
    <div className="flex flex-col items-center my-5">
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
      {(generatedImage ||image )&& (
          <button
            className="block w-35 text-md text-white text-lg font-bold
                         py-2 px-4 rounded-md my-2
                        border-0 bg-cosee-t hover:opacity-90"
            onClick={() => {
              setImage(null);
              setGeneratedImage(null);
              setError("");
            }}
          >
            Remove
          </button>
        )}
    </div>
  );
}

export default DisplayImage



