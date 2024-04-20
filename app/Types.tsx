
// export allows us to define types only once and reuse them in other components


export type ImageType = {
  name: string;
  imageUrl: string;
  createdAt: string;
  tags: [string, string, string]; // this is specific for wanting a tuple of three strings (which we want)
  ai: boolean,
};


export type UploadButtonProps = {
  image: File | null;
  generatedImage: string;

  tags: { tag1: string; tag2: string; tag3: string; };
  progress: number;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setTags: React.Dispatch<React.SetStateAction<{ tag1: string; tag2: string; tag3: string; }>>;
  setGeneratedImage: React.Dispatch<React.SetStateAction<string>>;
  setUploadSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DisplayImageProps = {
  image: null | Blob;
  generatedImage: string | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setGeneratedImage: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export type SelectImageTypeProps = {
  image: Blob;
  error: string;
  generatedImage: string | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};
//
export type TagFormProps = {
  tags: { tag1: string; tag2: string; tag3: string; };
  setTags: React.Dispatch<React.SetStateAction<{ tag1: string; tag2: string; tag3: string; }>>;
  setUploadSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export type GenerateButtonProps = {
  generatedImage: string;
  setGeneratedImage: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  tags: { tag1: string; tag2: string; tag3: string; };
  generating: boolean;
  setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SearchBarProps = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

export type GalleryProps = {
  filteredImages: ImageType[];
  isLoading: boolean;
};
