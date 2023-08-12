import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Education from './Education';
import Experience from './Experience';
import ProSkills from './ProSkills';

type CvPreviewProps = {
  imageUrl: string | null;
  componentRef: React.LegacyRef<HTMLDivElement>;
};

export default function CvPreview(props: CvPreviewProps) {
  return (
    <div
      className="flex h-[279mm] w-[216mm] sticky top-0"
      ref={props.componentRef}
    >
      <AboutMe imageUrl={props.imageUrl} />
      <div className="w-[63%] bg-[#f5f4ee]  border-b-[2rem] border-[#fe9c00]">
        <div className="mt-80">
          <Education />
          <Experience />
        </div>
      </div>
      <div className="flex flex-col w-[37%] bg-[#2b2b2d] pt-[15rem] px-5 border-3 border-red-50">
        <ContactMe />
        <ProSkills />
      </div>
    </div>
  );
}
