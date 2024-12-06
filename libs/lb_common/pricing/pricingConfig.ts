export const features = {
  academic_enhancement: {
    title: 'Academic Enhancement',
    description:
      'Tools and resources to support and improve academic performance',
  },
  technical_skills: {
    title: 'Technical Skills Development',
    description:
      'Comprehensive courses and training to acquire and enhance technical skills',
  },
  communication_skills: {
    title: 'Communication Skills Practice',
    description:
      'Dedicated platforms and sessions for improving verbal and written communication skills',
  },
  employability_improvement: {
    title: 'Employability Improvement',
    description:
      'Strategies and skill-building exercises aimed at enhancing employability scores',
  },
  career_guidance: {
    title: 'Career Guidance',
    description:
      'Expert advice and resources for navigating career paths and making informed decisions',
  },
  higher_studies: {
    title: 'Higher Studies Guidance',
    description:
      'Support and information for exploring and applying to higher education programs',
  },
  alumni_networking: {
    title: 'Alumni Networking',
    description:
      'Opportunities to connect and engage with alumni for mentorship and career support',
  },
  placement_guidance: {
    title: 'Placement Guidance',
    description:
      'Resources and support for preparing for job placements and interviews',
  },
  entrepreneurship: {
    title: 'Entrepreneurship Guidance',
    description:
      'Insights and resources to foster entrepreneurial skills and ventures',
  },
  competitive_exam: {
    title: 'Competitive Exam Preparation',
    description:
      'Tailored resources and support for excelling in competitive exams',
  },
  earning_opportunities: {
    title: 'Earning Opportunities',
    description:
      'Guidance on utilizing technical skills for earning through freelancing or part-time work',
  },
};

export const pricingPlans = {
  FREE: {
    id: 'free',
    name: 'Free',
    originalPrice: 0,
    discountedPrice: 0,
    billingCycle: 'yearly',
    trialDays: 0,
    recommended: false,
    features: {
      available: [
        'academic_enhancement',
        'technical_skills',
        'communication_skills',
      ],
      unavailable: [
        'employability_improvement',
        'career_guidance',
        'higher_studies',
        'alumni_networking',
        'placement_guidance',
        'entrepreneurship',
        'competitive_exam',
        'earning_opportunities',
      ],
    },
  },
  PRO: {
    id: 'pro',
    name: 'Pro',
    originalPrice: 299.99,
    discountedPrice: 249.99,
    billingCycle: 'yearly',
    trialDays: 14,
    recommended: true,
    offerValidTill: '2024-03-31',
    features: {
      available: [
        'academic_enhancement',
        'technical_skills',
        'communication_skills',
        'employability_improvement',
        'career_guidance',
        'higher_studies',
        'placement_guidance',
      ],
      unavailable: [
        'alumni_networking',
        'entrepreneurship',
        'competitive_exam',
        'earning_opportunities',
      ],
    },
  },
  ENTERPRISE: {
    id: 'enterprise',
    name: 'Enterprise',
    originalPrice: 999.99,
    discountedPrice: 899.99,
    billingCycle: 'yearly',
    trialDays: 30,
    recommended: false,
    offerValidTill: '2024-03-31',
    features: {
      available: [
        'academic_enhancement',
        'technical_skills',
        'communication_skills',
        'employability_improvement',
        'career_guidance',
        'higher_studies',
        'alumni_networking',
        'placement_guidance',
        'entrepreneurship',
        'competitive_exam',
        'earning_opportunities',
      ],
      unavailable: [],
    },
  },
};

export type FeatureKey = keyof typeof features;
export type PlanKey = keyof typeof pricingPlans;

export const pricingConfig = {
  features,
  plans: pricingPlans,
  currency: 'INR',
  currencySymbol: '₹',
};

export default pricingConfig;
