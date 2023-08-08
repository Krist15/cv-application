import '../assets/location.svg';
import locationLogo from '../assets/location.svg';
import worldLogo from '../assets/world.svg';
import phoneLogo from '../assets/phone.svg';
import { ContactMeType } from '../types';

type ContactMeProps = {
  ContactMeInfo: ContactMeType;
};

export default function ContactMe({ ContactMeInfo }: ContactMeProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center w-full h-11 p-6 border-2 border-[#fe9c00]">
        <h2 className="text-white text-2xl">CONTACT ME</h2>
      </div>
      <div className="flex w-full h-28">
        <div className="p-2">
          <img
            src={locationLogo}
            alt=""
            className="w-8 relative top-4"
          />
        </div>
        <div className="w-full">
          <p className="text-white">ADDRES</p>
          <p className="text-white break-normal font-extralight">
            {ContactMeInfo.address}
          </p>
        </div>
      </div>
      <div className="flex w-full h-28">
        <div className="p-2">
          <img
            src={worldLogo}
            alt=""
            className="w-8 relative top-4"
          />
        </div>
        <div className="w-full">
          <p className="text-white">WEB</p>
          <p className="text-white break-all font-extralight">
            {ContactMeInfo.web}
          </p>
        </div>
      </div>
      <div className="flex w-full h-28">
        <div className="p-2">
          <img
            src={phoneLogo}
            alt=""
            className="w-8 relative top-4"
          />
        </div>
        <div className="w-full">
          <p className="text-white">PHONE</p>
          <p className="text-white break-normal font-extralight">
            {ContactMeInfo.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
