// pages/api/generateImage.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type ApiResponseData = {
  imageUrl?: string; 
  error?: string;
  tags?: [string, string, string]
};

export default async function imageGenerator(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseData>
) {
  if (req.method === 'POST') {
    const { text } = req.body; 

    try {
      const apiResponse = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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', 
        },
        body: JSON.stringify({
          prompt: text,
          // Add other necessary parameters as required by the API
        }),
      });

      const data = await apiResponse.json() as ApiResponseData; 

      // Handle the response from the Stable Diffusion API
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate image' });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
