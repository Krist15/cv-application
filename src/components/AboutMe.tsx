import { About } from '../types';

type AboutProps = {
  about: About;
  imageUrl: string | null;
};

export default function AboutMe({ about, imageUrl }: AboutProps) {
  return (
    <>
      <div className="absolute top-20  right-0 w-[550px] h-28 bg-[#fe9c00] pl-48">
        <div className="flex flex-col items-start justify-center h-full">
          <div>
            <p className="text-white text-4xl">
              {about.name} {about.lastName}
            </p>
          </div>
          <div>
            <p className="text-white text-2xl font-extralight">
              {about.profession}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-[280px] left-24 h-[280px] rounded-full bg-[#f5f4ee] border-[0.90rem] border-[#292622]">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Curriculum Vitae Image"
            className="w-full h-full rounded-full -z-10 object-cover"
          />
        )}
      </div>
    </>
  );
}
