import locationLogo from '../assets/location.svg';
import worldLogo from '../assets/world.svg';
import phoneLogo from '../assets/phone.svg';
import { useCvState } from '../store/useStore';

export default function ContactMe() {
  const { cvState } = useCvState();
  const { address, web, phone } = cvState.contactMe;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center w-full h-11 p-6 border-2 border-[#fe9c00]">
        <h2 className="text-white text-2xl">CONTACT ME</h2>
      </div>
      <div className="flex w-full h-28">
        <div className="p-2">
          <img
            src={locationLogo}
            alt="Location Icon"
            className="w-8 relative top-4"
          />
        </div>
        <div className="w-full">
          <p className="text-white">ADDRES</p>
          <p className="text-white break-normal font-extralight">{address}</p>
        </div>
      </div>
      <div className="flex w-full h-28">
        <div className="p-2">
          <img
            src={worldLogo}
            alt="World Icon"
            className="w-8 relative top-4"
          />
        </div>
        <div className="w-full">
          <p className="text-white">WEB</p>
          <p className="text-white break-all font-extralight">{web}</p>
        </div>
      </div>
      <div className="flex w-full h-28">
        <div className="p-2">
          <img
            src={phoneLogo}
            alt="Phone Icon"
            className="w-8 relative top-4"
          />
        </div>
        <div className="w-full">
          <p className="text-white">PHONE</p>
          <p className="text-white break-normal font-extralight">{phone}</p>
        </div>
      </div>
    </div>
  );
}
