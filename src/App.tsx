import CvPreview from './components/CvPreview';
import Form from './components/Form';
import { useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import { useImage } from './hooks/useImage';

export default function App() {
  const { getImage, selectedImage } = useImage();
  const componenRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componenRef.current,
  });

  return (
    <main className="flex bg-[#0d1b2a] relative">
      <Form
        handleImageChange={getImage}
        handlePrint={handlePrint}
      />
      <CvPreview
        componentRef={componenRef}
        imageUrl={selectedImage}
      />
    </main>
  );
}
