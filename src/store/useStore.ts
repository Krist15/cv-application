import { create } from 'zustand';
import { CvInfo, EducationType } from '../types';

interface CvState {
  cvState: CvInfo;
  educationState: EducationType;
  handleAboutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContactMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEducationChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleExperienceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProSkillsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddEducation: () => void;
}

const cv: CvInfo = {
  about: {
    name: '',
    lastName: '',
    profession: '',
  },
  contactMe: {
    address: '',
    web: '',
    phone: '',
  },
  education: [],
  experience: {
    experiencePeriod: '',
    company: '',
    experienceDescription: '',
  },
  proSkills: [],
};

export const useCvState = create<CvState>((set) => ({
  cvState: cv,
  educationState: {
    period: '',
    school: '',
    description: '',
  },
  handleAboutChange: (e) => {
    const { value, name } = e.target;
    set((state) => {
      return {
        cvState: {
          ...state.cvState,
          about: {
            ...state.cvState.about,
            [name]: value,
          },
        },
      };
    });
  },
  handleContactMeChange: (e) => {
    const { value, name } = e.target;
    set((state) => {
      return {
        cvState: {
          ...state.cvState,
          contactMe: {
            ...state.cvState.contactMe,
            [name]: value,
          },
        },
      };
    });
  },
  handleEducationChange: (e) => {
    const { value, name } = e.target;
    set((state) => {
      return {
        educationState: {
          ...state.educationState,
          [name]: value,
        },
      };
    });
  },
  handleExperienceChange: (e) => {
    const { value, name } = e.target;
    set((state) => {
      return {
        cvState: {
          ...state.cvState,
          experience: {
            ...state.cvState.experience,
            [name]: value,
          },
        },
      };
    });
  },

  handleProSkillsChange: (e) => {
    const { value, name } = e.target;
    set((state) => {
      return {
        cvState: {
          ...state.cvState,
          proSkills: {
            ...state.cvState.proSkills,
            [name]: value,
          },
        },
      };
    });
  },

  handleAddEducation: () => {
    set((state) => {
      console.log(state.cvState.education);
      return {
        cvState: {
          ...state.cvState,
          education: [...state.cvState.education, state.educationState],
        },
      };
    });
  },
}));
