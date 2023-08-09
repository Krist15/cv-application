import { EducationType } from '../types';

type EducationProps = {
  educationList: EducationType[];
};

export default function Education({ educationList }: EducationProps) {
  return (
    <div className="w-[85%] h-1/2">
      <div className="flex justify-end items-center h-11 w-full px-10 bg-[#fe9c00]">
        <h2 className="text-3xl tracking-widest">EDUCATION</h2>
      </div>
      <div className="grid grid-cols-[1fr,2fr] grid-rows-3 gap-4 h-80 w-full p-3">
        <div className="h-full w-full">
          <div className="flex items-center gap-2">
            <div>
              <div className="w-10 h-10 bg-[#fe9c00]"></div> {/* Square */}
            </div>
            <div className="flex flex-col">
              <p className="font-light">2010-2015</p>
              <p>LOREM IPSUM</p>
            </div>
          </div>
        </div>
        <div>
          <p>LOREM IPSUM</p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            neque!
          </p>
        </div>
        {educationList.map((item) => {
          return (
            <>
              <div
                className="h-full w-full"
                key={item.period}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <div className="w-10 h-10 bg-[#fe9c00]"></div>{' '}
                    {/* Square */}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light">{item.period}</p>
                    <p>{item.school}</p>
                  </div>
                </div>
              </div>
              <div>
                <p>{item.school}</p>
                <p className="font-light">{item.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
