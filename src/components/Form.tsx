import React from 'react';

type FormProps = {
  handleRangeChange: React.ChangeEventHandler<HTMLInputElement>;
  width: number;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Form(props: FormProps) {
  return (
    <div className="w-2/5 h-screen border-4 border-black bg-[#fe9c00]">
      <form className="flex flex-col">
        <div>
          <label
            htmlFor="name"
            className="text-lg font-light"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={props.handleInputChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            name="profession"
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="contactMe">Website</label>
          <input
            type="text"
            name="web"
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            onChange={props.handleInputChange}
          />
        </div>
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
