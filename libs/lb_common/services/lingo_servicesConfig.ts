/* import { appRoutes } from '@/libs/lb_utils/src';
import { commonConstants } from '../commonConstants';
import { buddyConstants } from '@/libs/lb_buddy/src/lib/buddyConstants'; */
export const lingo_servicesConfig = {
  vocabularyTraining: {
    title: 'Vocabulary Builder',
    goal: 'Master essential vocabulary',
    description: 'Learn new words through interactive flash cards',
    icon: require('assets/images/common/services/campus/flashCard.webp'),
    route: 'ml/gw',
    status: ['active'],
  },
  languageExchange: {
    title: 'Language Exchange',
    goal: 'Practice speaking with native speakers',
    description: 'Connect with language partners for live practice',
    icon: require('assets/images/common/services/campus/buddyLearning.webp'),
    route: 'buddy/findBuddy',
    status: ['active'],
  },
  languageClubs: {
    title: 'Language Clubs',
    goal: 'Join language learning communities',
    description: 'Practice with peers in themed conversation groups',
    icon: require('assets/images/common/services/campus/clubhouse.webp'),
    route: 'clubs',
    status: ['active'],
  },
};