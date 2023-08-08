import React from 'react';
import { About } from '../types';

type FormProps = {
  width: number;
  about: About;
  handleRangeChange: React.ChangeEventHandler<HTMLInputElement>;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Form(props: FormProps) {
  return (
    <div className="w-2/5 h-screen border-4 border-black bg-[#fff]">
      <form className="flex flex-col gap-10">
        <div className="flex flex-col w-1/2">
          <p className="text-2xl text-center">About Me</p>
          <label
            htmlFor="name"
            className="text-lg font-light text-center"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder={props.about.name}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="lastName"
            className="text-center font-light text-lg"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="profession"
            className="text-center font-light text-lg"
          >
            Profession
          </label>
          <input
            type="text"
            name="profession"
            placeholder={props.about.profession}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="address"
            className="text-center font-light text-lg"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="1234 Main St, Anytown, USA"
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="contactMe"
            className="text-center font-light text-lg"
          >
            Website
          </label>
          <input
            type="text"
            name="web"
            placeholder="https://example.com"
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="phone"
            className="text-center font-light text-lg"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="(123) 456-7890"
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
        </div>
        {/* <input
          type="range"
          min={1}
          max={100}
          step={1}
          value={props.width}
          onChange={props.handleRangeChange}
          className="w-20"
        /> */}
      </form>
    </div>
  );
}

// const range = {
//    <input
//           type="range"
//           min={1}
//           max={100}
//           step={1}
//           value={props.width}
//           onChange={props.handleRangeChange}
//         />
// };
