import CvPreview from './components/CvPreview';
import Form from './components/Form';
import { useState } from 'react';

export type About = {
  name: string;
  lastName: string;
  profession: string;
};

export type ContactMeType = {
  address: string;
  web: string;
  phone: string;
};

export default function App() {
  const [width, setWidth] = useState(0);

  const [about, setAbout] = useState<About>({
    name: '',
    lastName: '',
    profession: '',
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
      />
      <CvPreview
        width={width}
        about={about}
        ContactMeType={contactMe}
      />
    </main>
  );
}
