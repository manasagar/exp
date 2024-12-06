import { getApplicationName } from '../lb_utils/src';
import { campus_servicesConfig } from './services/campus_servicesConfig';
import { lingo_servicesConfig } from './services/lingo_servicesConfig';

const featuresConfig = {
  campus: {
    sessionsSkillsPayload: {
      'Verbal Communication': [],
      "Programming": [],
    },
    servicesConfig: campus_servicesConfig,
  },
  lingo: {
    sessionsSkillsPayload: {
      'Verbal Communication': [],
      'Programming':[],
      'Academics':[],
      'Combined_Studies':[],
      'Technicals':[]

    },
    servicesConfig: lingo_servicesConfig,
  },
  defaultConfig: {
    servicesConfig: campus_servicesConfig,
  },
};

const appName = getApplicationName();

export const appConfig = (key) => {
  return featuresConfig[appName]?.[key] || featuresConfig.defaultConfig[key];
};
