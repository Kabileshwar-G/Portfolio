export interface VerificationEntry {
  item: string;
  sourceOrigin: string;
  verifiedValue: string;
  status: "Verified & Accurate" | "Clearly Qualified (Simulation)" | "Pending Official Transcript Update" | "In-Progress / Disclaimed";
  notes: string;
}

export const verificationMatrix: VerificationEntry[] = [
  {
    item: "Overall CGPA",
    sourceOrigin: "Uploaded Resume vs Historical Notes",
    verifiedValue: "8.02 / 10 Overall | 8.6 / 10 Recent Semester",
    status: "Verified & Accurate",
    notes: "Directly matches uploaded resume. The historical 8.61/10 cumulative note is explicitly clarified to prevent silent combining."
  },
  {
    item: "Innovate AI/ML Internship",
    sourceOrigin: "Resume Experience Section (May 2025 – Jun 2025)",
    verifiedValue: "15% accuracy gain on 10k+ records; 20% triage reduction (HealthCure)",
    status: "Clearly Qualified (Simulation)",
    notes: "Transparently presented as simulated healthcare records and research testbeds, not production hospital deployment."
  },
  {
    item: "EduSkills AI-ML Internship",
    sourceOrigin: "Resume Experience Section (Jan 2025 – Mar 2025)",
    verifiedValue: "3 models, ~85% baseline accuracy, 25% training pipeline acceleration",
    status: "Verified & Accurate",
    notes: "Verified virtual internship program with end-to-end predictive models."
  },
  {
    item: "MicroGuard AI Performance",
    sourceOrigin: "Project Benchmark Records",
    verifiedValue: "85%+ experimental precision on simulated microservices",
    status: "Clearly Qualified (Simulation)",
    notes: "Explicitly documented as an experimental prototype on simulated service traces, not an enterprise deployment."
  },
  {
    item: "Intelligent Solar Energy Management System",
    sourceOrigin: "Authored Research Paper (IEEE Standards)",
    verifiedValue: "81.55% performance improvement over rule-based baseline (-2379.94 to -439.16)",
    status: "Verified & Accurate",
    notes: "Directly verified against authored IEEE research paper coupling stacked LSTM forecasting with Deep Q-Network (DQN) reinforcement learning."
  },
  {
    item: "Open-World RAG Knowledge Engine",
    sourceOrigin: "Project Benchmark Records",
    verifiedValue: "10,000+ pages indexed, 40% query latency cut, ~95% contextual accuracy",
    status: "Verified & Accurate",
    notes: "Evaluated across structured domain documentation and question-answering benchmark queries."
  },
  {
    item: "Certifications vs Coursework",
    sourceOrigin: "Resume & Course Records",
    verifiedValue: "DeepLearning.AI, AWS Academy, Udemy, HackerRank, RHCSA (Prep)",
    status: "Verified & Accurate",
    notes: "Professional specializations strictly separated from general introductory coursework completion certificates."
  },
  {
    item: "Contact & Profiles",
    sourceOrigin: "Resume Header",
    verifiedValue: "kabileshwar2006@gmail.com | +91 8825660580 | linkedin.com/in/kabileshwar-g | github.com/Kabileshwar-G",
    status: "Verified & Accurate",
    notes: "All URLs and contact handles correspond directly to official profile links. No invented handles."
  }
];
