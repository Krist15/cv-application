import CvPreview from './components/CvPreview';
import Form from './components/Form';
import { useState } from 'react';
import { About, ContactMeType } from './types';

export default function App() {
  const [width, setWidth] = useState(0);

  const [about, setAbout] = useState<About>({
    name: 'Joeh Doe',
    lastName: 'Doe',
    profession: 'Software Engineer',
  });
  const [contactMe, setContactMe] = useState<ContactMeType>({
    address: '',
    web: '',
    phone: '',
  });

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWidth(parseInt(value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAbout((prevState) => ({ ...prevState, [name]: value }));
    setContactMe((prevState) => ({ ...prevState, [name]: value }));
    console.log(value, name);
  };

  return (
    <main className="flex ">
      <Form
        handleRangeChange={handleRangeChange}
        handleInputChange={handleInputChange}
        width={width}
        about={about}
      />
      <CvPreview
        width={width}
        about={about}
        ContactMeType={contactMe}
      />
    </main>
  );
}
