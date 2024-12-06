/* import { appRoutes } from '@/libs/lb_utils/src';
import { commonConstants } from '../commonConstants';
import { buddyConstants } from '@/libs/lb_buddy/src/lib/buddyConstants'; */
export const campus_servicesConfig = {
  softwareSkills: {
    title: 'Micro learning',
    goal: 'Master software skills',
    description: 'Learn software skills through flash cards',
    icon: require('assets/images/common/services/campus/flashCard.webp'),
    route: 'ml/gw',
    status: ['active'],
  },
  buddyLearning: {
    title: 'Buddy learning',
    goal: 'Practise communication, technical skills with buddies',
    description: 'Learn live with others',
    icon: require('assets/images/common/services/campus/buddyLearning.webp'),
    route: 'buddy/findBuddy',
    status: ['active'],
  },
  campus2career: {
    title: 'Campus 2 Career',
    goal: 'Get job',
    description: 'Resources to help you secure your first job',
    icon: require('assets/images/common/services/campus/campus2career.webp'), 
    route: 'Campus-to-Career',   
    status: ['active'],
  },
  campus2campus: {
    title: 'Campus 2 Campus',
    goal: 'Achieve Higher Education Goals',
    description: 'Guidance for higher studies',
    icon: require('assets/images/common/services/campus/campus2campus.webp'),
    status: [],
  },
  campuspreneur: {
    title: 'Campuspreneur',
    goal: 'Launch your own startup',
    description: 'Guidance for aspiring entrepreneurs',
    icon: require('assets/images/common/services/campus/campuspreneur.webp'),
    route: 'entrepreneurship',
    status: ['upcoming'],
  },
  clubs: {
    title: 'Clubhouse',
    goal: 'Connect and grow with like-minded peers',
    description: 'Join groups to achieve your goals together',
    icon: require('assets/images/common/services/campus/clubhouse.webp'),
    route: 'clubs',
    status: ['upcoming'],
  },
};
