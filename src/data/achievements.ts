export interface AchievementItem {
  id: string;
  title: string;
  organizer: string;
  type: "Competition Award" | "Leadership & Event Coordination";
  description: string;
  skillsHighlighted: string[];
}

export const achievements: AchievementItem[] = [
  {
    id: "hackathon-second-prize",
    title: "Second Prize — National-Level Hackathon",
    organizer: "Bannari Amman Institute of Technology",
    type: "Competition Award",
    description: "Competed against engineering teams nationwide to architect, code, and pitch a practical technology prototype under strict time constraints.",
    skillsHighlighted: ["Rapid Prototyping", "Full-Stack Development", "Architectural Pitching", "Team Collaboration"]
  },
  {
    id: "quiz-first-prize",
    title: "First Prize — College Technical Quiz Competition",
    organizer: "SRM Institute of Science and Technology",
    type: "Competition Award",
    description: "Secured first place in technical examination testing core Computer Science algorithms, operating systems, and programming language internals.",
    skillsHighlighted: ["Core CS Fundamentals", "Analytical Problem-Solving", "Algorithmic Precision"]
  },
  {
    id: "yuva-organizer",
    title: "Organizer — YUVA'25 Hackathon",
    organizer: "SRM Institute of Science and Technology",
    type: "Leadership & Event Coordination",
    description: "Organized technical logistics and developer problem statements for YUVA'25, engaging university students in practical software problem solving.",
    skillsHighlighted: ["Event Leadership", "Technical Problem Design", "Community Mentorship"]
  },
  {
    id: "hackathon-ops-lead",
    title: "Operations Coordinator — 24-Hour Hackathon",
    organizer: "SRM Institute of Science and Technology",
    type: "Leadership & Event Coordination",
    description: "Coordinated operational schedules, development infrastructure, and participant workflows for a 24-hour hackathon with 100+ active participants.",
    skillsHighlighted: ["Operational Execution", "High-Stress Coordination", "Infrastructure Reliability"]
  }
];

export interface RoadmapDomain {
  domain: string;
  focus: string;
  objective: string;
  technologies: string[];
}

export const explorationRoadmap: RoadmapDomain[] = [
  {
    domain: "Distributed Systems & Consensus",
    focus: "Raft Algorithm & Partitioning Resiliency",
    objective: "Deepening practical implementations of distributed state machines, leader elections, and partitioned Kafka consumer architectures under adverse network splits.",
    technologies: ["Apache Kafka", "Go/Java", "Distributed Tracing", "gRPC"]
  },
  {
    domain: "Advanced RAG & Retrieval Systems",
    focus: "Multi-Hop & Self-Corrective RAG",
    objective: "Exploring iterative retrieval strategies (Self-RAG, Corrective RAG, GraphRAG) to solve multi-step reasoning queries across heterogeneous technical manuals.",
    technologies: ["LangChain", "ColBERT", "GraphRAG", "ChromaDB"]
  },
  {
    domain: "Graph Neural Networks (GNNs)",
    focus: "Dynamic & Temporal Service Dependency Graphs",
    objective: "Advancing from static graph convolutions to Temporal Graph Networks (TGN) for continuous microservice topology change detection.",
    technologies: ["PyTorch Geometric", "Dynamic Graphs", "Graph Attention Networks"]
  },
  {
    domain: "Production MLOps & Model Serving",
    focus: "Low-Latency High-Concurrency Inference",
    objective: "Benchmarking tensor quantization, ONNX Runtime, and Triton Inference Server deployments within Kubernetes clusters.",
    technologies: ["Kubernetes", "Triton", "ONNX", "Docker", "Prometheus"]
  }
];
