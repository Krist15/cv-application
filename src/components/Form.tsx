import React from 'react';

type FormProps = {
  handleRangeChange: React.ChangeEventHandler<HTMLInputElement>;
  width: number;
};

export default function Form(props: FormProps) {
  return (
    <div className="w-2/5 h-screen border-4 border-black">
      <form className="flex flex-col">
        <label htmlFor="name">name</label>
        {/* <input
          type="range"
          min={1}
          max={100}
          step={1}
          value={props.width}
          onChange={props.handleRangeChange}
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
