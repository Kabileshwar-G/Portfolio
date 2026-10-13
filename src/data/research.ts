export interface ResearchWork {
  id: string;
  title: string;
  type: "Research Paper (IEEE Standards)" | "Conference / Journal Preprint";
  authors: string[];
  institution: string;
  field: string;
  abstract: string;
  keywords: string[];
  metrics: { label: string; value: string }[];
  contributions: string[];
  link: string;
}

export const researchWorks: ResearchWork[] = [
  {
    id: "solar-energy-lstm-dqn",
    title: "Intelligent Solar Energy Management using LSTM-Based Forecasting and Deep Reinforcement Learning",
    type: "Research Paper (IEEE Standards)",
    authors: ["Kabileshwar G", "Charukesh MR", "Thurai Pandian M"],
    institution: "Department of CSE-AIML, SRM Institute of Science and Technology, Tiruchirappalli, India",
    field: "Deep Learning · Reinforcement Learning · Smart Grid Systems",
    abstract: "The research introduces a solar energy management system which uses time-series forecasting together with reinforcement learning to achieve effective energy management. The system uses a Long Short-Term Memory (LSTM) network to forecast solar power output based on past weather information while a Deep Q-Network (DQN) agent selects the best methods for energy storage, consumption, and power sales. The proposed system demonstrates an 81.55% performance improvement over the baseline rule-based strategy.",
    keywords: [
      "Solar Energy",
      "LSTM",
      "Reinforcement Learning",
      "Deep Q-Network (DQN)",
      "Time-Series Forecasting",
      "Energy Management",
      "Smart Grid"
    ],
    metrics: [
      { label: "Performance Gain", value: "81.55%" },
      { label: "Predictive Model", value: "Stacked LSTM" },
      { label: "Decision Engine", value: "Deep Q-Network (DQN)" },
      { label: "Format Standard", value: "IEEE Format" }
    ],
    contributions: [
      "Engineered an integrated hybrid clean-tech framework coupling sequential LSTM time-series forecasting with Deep Q-Network (DQN) reinforcement learning for proactive smart grid optimization.",
      "Developed cyclic sinusoidal feature transformations (hour_sin / hour_cos) and Min-Max scaling across weather features (solar irradiance, temperature, humidity, wind speed) to accurately track periodic diurnal trends.",
      "Formulated a Markov Decision Process (MDP) modeling 5-dimensional state vectors with discrete 4-action spaces (store, use, sell, wait) and a custom multi-objective reward function to maximize long-term grid profit while penalizing battery overflow and depletion.",
      "Demonstrated an 81.55% empirical performance improvement over standard rule-based energy management baselines under dynamic environmental variations."
    ],
    link: "https://github.com/Kabileshwar-G/Portfolio"
  }
];
