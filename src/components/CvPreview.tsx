import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Education from './Education';
import Experience from './Experience';
import ProSkills from './ProSkills';
import SocialMedia from './SocialMedia';

export default function CvPreview() {
  return (
    <div className="flex h-[1123px] w-[794px] mx-10 relative">
      <AboutMe />
      <div className="w-[63%] bg-[#f5f4ee]  border-b-[2rem] border-[#fe9c00]">
        <div className="mt-80">
          <Education />
          <Experience />
        </div>
      </div>
      <div className="flex flex-col w-[37%] bg-[#2b2b2d] pt-[15rem] px-5 border-3 border-red-50">
        <ContactMe />
        <ProSkills />
        <SocialMedia />
      </div>
    </div>
  );
}
