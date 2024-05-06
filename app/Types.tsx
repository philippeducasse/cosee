// export allows us to define types only once and reuse them in other components

export type ImageType = {
  name: string;
  imageUrl: string;
  createdAt: string;
  tags: [string, string, string]; // this is specific for wanting a tuple of three strings (which we want)
  ai: boolean;
};

export type NavbarProps = {
  setSearchInput?: React.Dispatch<React.SetStateAction<string>> ;
}

export type UploadButtonProps = {
  image: File | null;
  generatedImage: string;

  tags: Tag;
  progress: number;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setTags: React.Dispatch<
    React.SetStateAction<Tag>
  >;
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

export type SelectImageProps = {
  image: File | null;
  error: string;
  generatedImage: string | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};
//

type Tag = {
  tag1: string;
  tag2: string;
  tag3: string;
};
export type TagFormProps = {
  tags: Tag;
  setTags: React.Dispatch<
    React.SetStateAction<Tag>
  >;
  setUploadSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export type GenerateButtonProps = {
  generatedImage: string;
  setGeneratedImage: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  tags: Tag;
  generating: boolean;
  setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SearchBarProps = {
  setSearchInput?: React.Dispatch<React.SetStateAction<string>>;
};

export type GalleryProps = {
  filteredImages: ImageType[];
  isLoading: boolean;
};
