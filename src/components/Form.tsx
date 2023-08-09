import React from 'react';
import { About, EducationType, ExperienceType } from '../types';
import printIcon from '../assets/print.svg';

type FormProps = {
  width: number;
  about: About;
  education: EducationType;
  experience: ExperienceType;
  educationList: EducationType[];
  experienceList: ExperienceType[];
  handleRangeChange: React.ChangeEventHandler<HTMLInputElement>;
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  handleEducation: () => void;
  handleExperience: () => void;
  handleProSkills: () => void;
  handlePrint: () => void;
};

export default function Form(props: FormProps) {
  const disableExperience = () => {
    if (props.experienceList.length >= 2) {
      return true;
    }
  };

  const disableEducation = () => {
    if (props.educationList.length >= 2) {
      return true;
    }
  };

  return (
    <div className="w-2/5 h-full bg-[#f5f4ee]">
      <form className="flex flex-col gap-10 items-center">
        <p className="text-2xl text-center">About Me</p>
        <div className="flex flex-col w-1/2">
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
        <h2 className="text-2xl text-center">Education</h2>
        <div className="flex flex-col">
          <label
            htmlFor="education"
            className="text-lg font-light text-center"
          >
            Period
          </label>
          <input
            type="text"
            name="period"
            value={props.education.period}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
          <label
            htmlFor="school"
            className="text-lg font-light text-center"
          >
            School
          </label>
          <input
            type="text"
            name="school"
            value={props.education.school}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
          <label
            htmlFor="school"
            className="text-lg font-light text-center"
          >
            Description
          </label>
          <textarea
            name="description"
            rows={2}
            cols={30}
            value={props.education.description}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200 resize-none"
          />
          <button
            type="button"
            className={`bg-green-300 rounded border hover:bg-green-400 transition ease-out my-3 ${
              disableEducation() && 'bg-gray-100 cursor-not-allowed'
            }`}
            onClick={props.handleEducation}
            disabled={disableEducation()}
          >
            ➕
          </button>
        </div>
        <h2 className="text-2xl text-center">Experience</h2>
        <div className="flex flex-col">
          <label
            htmlFor="education"
            className="text-lg font-light text-center"
          >
            Period
          </label>
          <input
            type="text"
            name="period"
            value={props.education.period}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
          <label
            htmlFor="school"
            className="text-lg font-light text-center"
          >
            Company
          </label>
          <input
            type="text"
            name="company"
            value={props.experience.company}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200"
          />
          <label
            htmlFor="school"
            className="text-lg font-light text-center"
          >
            Description
          </label>
          <textarea
            name="experienceDescription"
            rows={2}
            cols={30}
            value={props.experience.experienceDescription}
            onChange={props.handleInputChange}
            className="rounded-md bg-gray-200 resize-none"
          />
          <button
            type="button"
            className={`bg-green-300 rounded border hover:bg-green-400 transition ease-out my-3 ${
              disableExperience() && 'bg-gray-100 cursor-not-allowed'
            }`}
            onClick={props.handleExperience}
            disabled={disableExperience()}
          >
            ➕
          </button>
        </div>
        <h2 className="text-2xl text-center">Contact Me</h2>
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
        <h2 className="text-2xl text-center">Pro Skills</h2>
        <div className="flex w-1/2 gap-x-2">
          <div className="flex flex-col w-full">
            <label
              htmlFor="skills"
              className="text-center font-light text-lg"
            >
              Skill {props.width}%
            </label>
            <input
              type="text"
              name="skill"
              className="rounded-md bg-gray-200"
              onChange={props.handleInputChange}
            />
            <input
              type="range"
              min={1}
              max={100}
              step={1}
              value={props.width}
              onChange={props.handleRangeChange}
            />
          </div>
          <div className="flex items-end justify-end h-full">
            <button
              type="button"
              onClick={props.handleProSkills}
              className="bg-green-300 rounded border hover:bg-green-400 transition ease-out my-3 w-10 h-10 mt-6 text-white text-3xl flex justify-center"
            >
              +
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={props.handlePrint}
          className="bg-green-300 rounded border hover:bg-green-400 transition ease-out w-10 h-10text-3xl flex justify-center"
        >
          <img
            src={printIcon}
            alt="Print Icon"
            className="w-8"
          />
        </button>
      </form>
    </div>
  );
}
