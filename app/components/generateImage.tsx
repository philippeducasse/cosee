import React from 'react';

// Ensure you've imported all necessary functions and components
interface ImageItem {
    image_resource_url: string;
  }
  
  interface ProviderResponse {
    status: string;
    items: ImageItem[];
  }
  
  interface ApiResponse {
    deepai?: ProviderResponse;
    // Define other providers as needed
  }

const GenerateButton: React.FC<any> = ({setGeneratedImage, setError, tags }) => {

  const generateImage = async () => {
    const options = {
      method: 'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmY3ZDQ3MmEtMGQxNC00YzliLWJjNTYtNzE2ODNkY2M1YThlIiwidHlwZSI6ImFwaV90b2tlbiJ9.ECYgGswnWvSovicXNO_e8Rl53Qt0LwdkPAqw3W89RsE' },
      body: JSON.stringify({
        providers:'amazon, deepai, openai, stabilityai',
        text: 'dog beach sunny',
        response_as_dict: true,
        attributes_as_list: false,
        show_original_response: false,
        resolution: '256x256',
        num_images: 1
      })
    };

    fetch('https://api.edenai.run/v2/image/generation', options)
      .then(response => response.json())
      .then((response: any) => {
        // Assuming the API returns an image URL in the response object
        // Check if the response has the expected property
        console.log(response)
        if (response.deepai.status === 'success' && response.deepai.items.length > 0) {
            const imageUrl = response.deepai.items[0].image_resource_url; // Extract the image URL
            setGeneratedImage(imageUrl); // Update the image state with the URL
        } else {
          console.error('Image data not found in response');
          setError('Failed to generate image');
        }
      })
      .catch(err => {
        console.error(err);
        setError('Error fetching image');
      });
  };

  // This function should be outside of `generateImage`
  const handleSubmit = () => {
      generateImage();
  };

  return (
    <div className='flex flex-col justify-center'>
      <button className='py-2 px-6 lg:w-1/5 self-center my-4 bg-cosee-y rounded-md hover:bg-opacity-70 font-bold'
        onClick={handleSubmit}>Generate</button>
      {/* {image && <ProgressBar progress={progress}} */}
    </div>
  );
};

export default GenerateButton;
