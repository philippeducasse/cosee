import React from "react";
import { GenerateButtonProps } from '../Types';

// Ensure you've imported all necessary functions and components
interface ImageItem {
  image_resource_url: string;
}

interface ProviderResponse {
  status: string;
  items: ImageItem[];
}

interface ApiResponse {
  deepai: ProviderResponse;
  // Define other providers as needed
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  setGeneratedImage,
  setError,
  tags,
  generatedImage,
  generating,
  setGenerating,
}) => {
  const generateImage = async () => {
    const tagsString = Object.values(tags).join(" ");
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDQ4Y2NmM2YtNjRlOC00MTUwLTkwMGUtZDMxOTI5YWM3ZGQ0IiwidHlwZSI6ImFwaV90b2tlbiJ9.EYpWaflnhQHCkl3C6-hwJrvPJ23YP_H2fg4QgThEcCg",
      },
      body: JSON.stringify({
        providers: "deepai",
        text: tagsString,
        response_as_dict: true,
        attributes_as_list: false,
        show_original_response: false,
        resolution: "512x512",
        num_images: 1,
      }),
    };

    fetch("https://api.edenai.run/v2/image/generation", options)
      .then((response) => response.json())
      .then((response: ApiResponse) => {
        // Assuming the API returns an image URL in the response object
        // Check if the response has the expected property
        console.log(response);
        if (
          response.deepai.status === "success" &&
          response.deepai.items.length > 0
        ) {
          const imageUrl = response.deepai.items[0].image_resource_url; // Extract the image URL
          setGeneratedImage(imageUrl); // Update the image state with the URL
          setGenerating(false);
        } else {
          console.error("Image data not found in response");
          setError("Failed to generate image");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching image");
      });
  };

  // This function should be outside of `generateImage`
  const handleSubmit = () => {
    if (!tags.tag1 || !tags.tag2 || !tags.tag3) {
      setError("Please give your image three tags!");
    } else {
      generateImage();
      setGenerating(true);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <button
        className="py-3 px-6  self-center my-4 bg-cosee-t text-white text-xl rounded-md hover:bg-opacity-90 font-bold"
        onClick={handleSubmit}
      >
        Generate
      </button>
    </div>
  );
};

export default GenerateButton;
