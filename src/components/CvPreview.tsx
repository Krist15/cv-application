import ContactMe from './ContactMe';
import ProSkills from './ProSkills';
import SocialMedia from './SocialMedia';

export default function CvPreview() {
  return (
    <div className="flex h-[1123px] w-[794px] mx-10 border-4 ">
      <div className="w-[63%] bg-[#f5f4ee] border-2 border-black">
        <div className="w-3/5 h-1/2">
          <div className="flex justify-end h-11 w-10/12 px-10 bg-[#fe9c00]">
            <h2 className="text-3xl tracking-widest">EDUCATION</h2>
          </div>
          <div className="border-2 border-black h-80 h"></div>
        </div>
        <div className="w-3/5 h-1/2">
          <div className="flex justify-end h-11 w-10/12 px-10 bg-[#fe9c00]">
            <h2 className="text-3xl tracking-widest">EXPERIENCE</h2>
          </div>
          <div className="border-2 border-black h-80 h"></div>
        </div>
      </div>
      <div className="flex flex-col w-[37%] bg-[#2b2b2d] pt-56 px-5 border-3 border-red-50">
        <ContactMe />
        <ProSkills />
        <SocialMedia />
      </div>
    </div>
  );
}
