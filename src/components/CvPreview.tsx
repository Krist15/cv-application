import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Education from './Education';
import Experience from './Experience';
import ProSkills from './ProSkills';
import SocialMedia from './SocialMedia';
import { About } from '../App';
import { ContactMeType } from '../App';

type CvPreviewProps = {
  width: number;
  about: About;
  ContactMeType: ContactMeType;
};

export default function CvPreview(props: CvPreviewProps) {
  return (
    <div className="flex h-[1123px] w-[950px] mx-10 relative">
      <AboutMe about={props.about} />
      <div className="w-[63%] bg-[#f5f4ee]  border-b-[2rem] border-[#fe9c00]">
        <div className="mt-80">
          <Education />
          <Experience />
        </div>
      </div>
      <div className="flex flex-col w-[37%] bg-[#2b2b2d] pt-[15rem] px-5 border-3 border-red-50">
        <ContactMe ContactMeInfo={props.ContactMeType} />
        <ProSkills width={props.width} />
        <SocialMedia />
      </div>
    </div>
  );
}
