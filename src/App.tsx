import CvPreview from './components/CvPreview';
import Form from './components/Form';
import { useState, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

export default function App() {
  const componenRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handlePrint = useReactToPrint({
    content: () => componenRef.current,
  });

  return (
    <main className="flex bg-[#0d1b2a] relative">
      <Form
        handleImageChange={handleImageChange}
        handlePrint={handlePrint}
      />
      <CvPreview
        componentRef={componenRef}
        imageUrl={selectedImage}
      />
    </main>
  );
}
