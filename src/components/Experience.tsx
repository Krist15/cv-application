import { ExperienceType } from '../types';

type ExperienceProps = {
  experienceList: ExperienceType[];
};

export default function Experience({ experienceList }: ExperienceProps) {
  return (
    <div className="w-[85%] h-1/2">
      <div className="flex justify-end items-center h-11 w-full px-10 bg-[#fe9c00]">
        <h2 className="text-3xl tracking-widest">EXPERIENCE</h2>
      </div>
      <div className="grid grid-cols-[1fr,2fr] grid-rows-3 gap-4 h-80 w-full p-3">
        {experienceList.map((item) => {
          return (
            <>
              <div
                className="h-full w-full"
                key={item.experiencePeriod}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <div className="w-10 h-10 bg-[#fe9c00]"></div>{' '}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light">{item.experiencePeriod}</p>
                    <p>{item.company}</p>
                  </div>
                </div>
              </div>
              <div>
                <p>{item.company}</p>
                <p className="font-light">{item.experienceDescription}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
