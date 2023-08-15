import { create } from 'zustand';
import { CvInfo, EducationType, ExperienceType, ProSkillsType } from '../types';

interface CvState {
  cvState: CvInfo;
  educationState: EducationType;
  experienceState: ExperienceType;
  proSkillState: ProSkillsType;
  skillRange: number;
  handleAboutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContactMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEducationChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleExperienceChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProSkillsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddEducation: () => void;
  handleAddExperience: () => void;
  handleAddProSkills: () => void;
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
  experience: [],
  proSkills: [],
};

const initEducation: EducationType = {
  period: '',
  school: '',
  description: '',
};
const initExperience: ExperienceType = {
  experiencePeriod: '',
  company: '',
  experienceDescription: '',
};
const initProSkill: ProSkillsType = {
  width: 0,
  skill: '',
};

export const useCvState = create<CvState>((set) => ({
  cvState: cv,
  educationState: initEducation,
  experienceState: initExperience,
  proSkillState: initProSkill,
  skillRange: 0,

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
    set((state) => {
      const { name, value } = e.target;
      return {
        experienceState: {
          ...state.experienceState,
          [name]: value,
        },
      };
    });
  },

  handleProSkillsChange: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        proSkillState: {
          ...state.proSkillState,
          [name]: value,
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
        educationState: {
          ...state.educationState,
          period: '',
          school: '',
          description: '',
        },
      };
    });
  },
  handleAddExperience: () => {
    set((state) => {
      return {
        cvState: {
          ...state.cvState,
          experience: [...state.cvState.experience, state.experienceState],
        },
        experienceState: {
          ...state.experienceState,
          company: '',
          experienceDescription: '',
          experiencePeriod: '',
        },
      };
    });
  },
  handleAddProSkills: () => {
    set((state) => {
      const newSkill: ProSkillsType = {
        skill: state.proSkillState.skill,
        width: state.skillRange,
      };
      return {
        cvState: {
          ...state.cvState,
          proSkills: [...state.cvState.proSkills, newSkill],
        },
        proSkillState: {
          ...state.proSkillState,
          skill: '',
          width: 0,
        },
        skillRange: 0,
      };
    });
  },
  handleRangeChange: (e) => {
    const { value } = e.target;
    set((state) => {
      console.log(state.skillRange);
      return {
        skillRange: (state.skillRange = parseInt(value)),
      };
    });
  },
}));
