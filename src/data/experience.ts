export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "innovate-intern",
    role: "AI & Machine Learning Intern",
    organization: "Innovate",
    period: "May 2025 – Jun 2025",
    location: "Chennai, Tamil Nadu",
    highlights: [
      "Built and evaluated ML models on healthcare data, pushing diagnostic prediction accuracy up 15% on a set of 10,000+ simulated records.",
      "Helped ship 'HealthCure,' a model that cut patient triage time by 20% through cleaner data processing."
    ]
  },
  {
    id: "eduskills-intern",
    role: "AI-ML Intern",
    organization: "EduSkills",
    period: "Jan 2025 – Mar 2025",
    location: "Remote",
    highlights: [
      "Built and deployed 3 predictive models end to end, reaching around 85% baseline accuracy.",
      "Reworked the preprocessing pipeline, cutting training time by 25% on the final runs."
    ]
  }
];
