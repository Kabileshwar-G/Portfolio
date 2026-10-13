export interface ResearchWork {
  id: string;
  title: string;
  type: "Research Preprint (arXiv, IEEE Standards)";
  authors: string[];
  field: string;
  contributions: string[];
  link: string;
}

export const researchWorks: ResearchWork[] = [
  {
    id: "hospital-bed-marl",
    title: "Agentic AI Smart Hospital Bed System",
    type: "Research Preprint (arXiv, IEEE Standards)",
    authors: ["Kabileshwar G"],
    field: "Reinforcement Learning · Multi-Agent Systems",
    contributions: [
      "Authored a research paper on autonomous medical resource allocation, formatted to IEEE standards.",
      "Developed multi-agent RL logic to allocate 500+ virtual beds, simulating a 30% reduction in wait times."
    ],
    link: "https://github.com/Kabileshwar-G"
  }
];
