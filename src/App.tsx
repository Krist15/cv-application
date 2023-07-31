import CvPreview from './components/CvPreview';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [width, setWidth] = useState(0);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWidth(parseInt(value));
  };

  return (
    <main className="flex ">
      <Form
        handleRangeChange={handleRangeChange}
        width={width}
      />
      <CvPreview width={width} />
    </main>
  );
}
