type PropSkillsProps = {
  width: number;
};

export default function ProSkills({ width }: PropSkillsProps) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="flex items-center justify-center w-full h-11 p-6 border-2 border-[#fe9c00]">
        <h2 className="text-white text-2xl">PRO SKILLS</h2>
      </div>
      <div className="flex flex-col items-center w-full text-white">
        <p>ILLUSTRATOR</p>
        <div className="w-full h-5 border-2 border-[#fe9c00]">
          <div
            style={{
              height: '100%',
              width: `${width}%`,
              backgroundColor: '#fe9c00',
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full text-white">
        <p>PHOTOSHOP</p>
        <div className="w-full h-5 border-2 border-[#fe9c00]"></div>
      </div>
      <div className="flex flex-col items-center w-full text-white">
        <p>INDESIGN</p>
        <div className="w-full h-5 border-2 border-[#fe9c00]"></div>
      </div>
      <div className="flex flex-col items-center w-full text-white">
        <p>MS WORD</p>
        <div className="w-full h-5 border-2 border-[#fe9c00]"></div>
      </div>
    </div>
  );
}
