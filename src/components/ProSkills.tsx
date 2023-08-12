import { useCvState } from '../store/useStore';

export default function ProSkills() {
  const { cvState } = useCvState();
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="flex items-center justify-center w-full h-11 p-6 border-2 border-[#fe9c00]">
        <h2 className="text-white text-2xl">PRO SKILLS</h2>
      </div>
      {cvState.proSkills.map((skills) => (
        <div className="flex flex-col items-center w-full text-white">
          <p>{skills.skill}</p>
          <div className="w-full h-5 border-2 border-[#fe9c00]">
            <div
              style={{
                height: '100%',
                width: `${skills.width}%`,
                backgroundColor: '#fe9c00',
                display: 'flex',
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              {skills.width}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
