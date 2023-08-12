import { useState } from 'react';

export function useImage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFile = e.target.files?.[0];
      if (
        selectedFile &&
        (selectedFile.type === 'image/jpeg' ||
          selectedFile.type === 'image/jpg' ||
          selectedFile.type === 'image/png')
      ) {
        const imageUrl = window.URL.createObjectURL(selectedFile);
        setSelectedImage(imageUrl);
      } else {
        throw new Error('Unsupported image type');
      }
    } catch (error) {
      alert(error);
    }
  };

  return { getImage, selectedImage };
}
