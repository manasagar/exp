// scoreConfig.ts

export interface CategoryConfig {
    weightage: number;
  }
  
  export const scoreConfig: Record<string, CategoryConfig> = {
    health: { weightage: 1 }, // Example weightage for health-related actions
    wealth: { weightage: 2 }, // Example weightage for wealth-related actions
    // Add more categories and adjust weightages as needed
  };