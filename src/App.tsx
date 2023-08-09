import CvPreview from './components/CvPreview';
import Form from './components/Form';
import { useState, useRef } from 'react';

import {
  About,
  ContactMeType,
  EducationType,
  ExperienceType,
  ProSkillsType,
} from './types';
import { useReactToPrint } from 'react-to-print';

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

  const [education, setEducation] = useState<EducationType>({
    period: '2010-2022',
    school: 'Udemy',
    degree: 'Web Development',
    description: 'Web Development lorem ipsum lorem ipsum lorem ipsum',
  });

  const [proSkills, setProSkills] = useState<ProSkillsType>({
    skill: '',
    width: 0,
  });

  const [experience, setExperience] = useState<ExperienceType>({
    experiencePeriod: '',
    company: '',
    experienceDescription: '',
  });

  const [educationList, setEducationList] = useState<EducationType[]>([]);
  const [experienceList, setExperienceList] = useState<ExperienceType[]>([]);
  const [proSkillsList, setProSkillsList] = useState<ProSkillsType[]>([]);

  const componenRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componenRef.current,
  });

  const handleEducation = () => {
    setEducationList([...educationList, education]);
    setEducation({ period: '', school: '', degree: '', description: '' });
  };

  const handleExperience = () => {
    setExperienceList([...experienceList, experience]);
    setExperience({
      experiencePeriod: '',
      company: '',
      experienceDescription: '',
    });
  };

  const handleProSkills = () => {
    setProSkillsList([...proSkillsList, proSkills]);
    setProSkills({ skill: '', width: 0 });
    setWidth(0);
    console.log(proSkills);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWidth(parseInt(value));
    setProSkills((prevState) => ({ ...prevState, width: parseInt(value) }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setAbout((prevState) => ({ ...prevState, [name]: value }));
    setContactMe((prevState) => ({ ...prevState, [name]: value }));
    setEducation((prevState) => ({ ...prevState, [name]: value }));
    setExperience((prevState) => ({ ...prevState, [name]: value }));
    setProSkills((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <main className="flex bg-[#0d1b2a] relative">
      <Form
        handleRangeChange={handleRangeChange}
        handleInputChange={handleInputChange}
        handleEducation={handleEducation}
        handleExperience={handleExperience}
        handleProSkills={handleProSkills}
        handlePrint={handlePrint}
        experience={experience}
        experienceList={experienceList}
        width={width}
        about={about}
        education={education}
        educationList={educationList}
      />
      <CvPreview
        width={width}
        about={about}
        educationList={educationList}
        experienceList={experienceList}
        proSkillsList={proSkillsList}
        ContactMeType={contactMe}
        componentRef={componenRef}
      />
    </main>
  );
}
