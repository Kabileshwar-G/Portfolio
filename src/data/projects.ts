export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Distributed Systems & AI/ML" | "Generative AI & RAG" | "Cloud & MLOps" | "Multi-Agent & Research" | "Full-Stack Web";
  isFlagship: boolean;
  status: "Completed & Verified" | "Research Preprint (arXiv)" | "Simulation Benchmark";
  technologies: string[];
  metrics: ProjectMetric[];
  bullets: string[];
  githubUrl: string;
  preprintUrl?: string;
}

export const projects: Project[] = [
  {
    id: "microguard-ai",
    title: "MicroGuard AI",
    tagline: "Distributed Cascade-Failure Prediction System",
    category: "Distributed Systems & AI/ML",
    isFlagship: true,
    status: "Simulation Benchmark",
    technologies: [
      "Kafka",
      "Spring Boot",
      "FastAPI",
      "PyTorch GNN",
      "React/Next.js",
      "D3.js",
      "Redis",
      "MLflow"
    ],
    metrics: [
      {
        label: "Failure Prediction Precision",
        value: "85%+",
        context: "Trained on server telemetry to predict cascading failures with MLflow experiment tracking"
      },
      {
        label: "Live Dependency Graph",
        value: "Real-Time",
        context: "Event-driven microservices pipeline streaming traces through Kafka into Redis"
      },
      {
        label: "Observability",
        value: "Live WebSocket",
        context: "React/Next.js + D3.js dashboard with WebSocket-driven live failure alerts"
      }
    ],
    bullets: [
      "Built an event-driven microservices pipeline (Python, Node.js, Spring Boot) streaming real-time service traces through Kafka into a live dependency graph in Redis.",
      "Trained a PyTorch Graph Neural Network on server telemetry to predict cascading failures (85%+ precision), with experiments tracked in MLflow.",
      "Served predictions through FastAPI and built a React/Next.js + D3.js dashboard with WebSocket-driven live alerts."
    ],
    githubUrl: "https://github.com/Kabileshwar-G"
  },
  {
    id: "smart-hospital-bed",
    title: "Agentic AI Smart Hospital Bed System",
    tagline: "Autonomous Medical Resource Allocation via Multi-Agent RL",
    category: "Multi-Agent & Research",
    isFlagship: true,
    status: "Research Preprint (arXiv)",
    technologies: [
      "Reinforcement Learning",
      "Multi-Agent Systems",
      "Python",
      "IEEE Standards"
    ],
    metrics: [
      {
        label: "Simulated Allocation",
        value: "500+ Beds",
        context: "Developed multi-agent RL logic to allocate 500+ virtual beds"
      },
      {
        label: "Wait Time Reduction",
        value: "30%",
        context: "Simulated 30% reduction in emergency and triage wait times"
      },
      {
        label: "Paper Format",
        value: "IEEE Standards",
        context: "Authored research paper preprint on autonomous resource allocation"
      }
    ],
    bullets: [
      "Authored a research paper on autonomous medical resource allocation, formatted to IEEE standards.",
      "Developed multi-agent RL logic to allocate 500+ virtual beds, simulating a 30% reduction in wait times."
    ],
    githubUrl: "https://github.com/Kabileshwar-G",
    preprintUrl: "https://github.com/Kabileshwar-G"
  },
  {
    id: "rag-knowledge-engine",
    title: "Open-World RAG Knowledge Engine",
    tagline: "Enterprise Semantic Retrieval & Anti-Hallucination Pipeline",
    category: "Generative AI & RAG",
    isFlagship: true,
    status: "Completed & Verified",
    technologies: [
      "LangChain",
      "ChromaDB",
      "Prompt Engineering",
      "Python"
    ],
    metrics: [
      {
        label: "Corpus Scale",
        value: "10,000+ Pages",
        context: "RAG assistant operating over unstructured text corpora"
      },
      {
        label: "Query Latency",
        value: "-40%",
        context: "Cut query response latency by 40% via semantic search"
      },
      {
        label: "Contextual Accuracy",
        value: "~95%",
        context: "Prompt-management layer reduced hallucinations to reach ~95% testing accuracy"
      }
    ],
    bullets: [
      "Built a RAG assistant over 10,000+ pages of unstructured text; semantic search cut query latency by 40%.",
      "Designed a prompt-management layer that reduced hallucinations, reaching about 95% contextual accuracy in testing."
    ],
    githubUrl: "https://github.com/Kabileshwar-G"
  },
  {
    id: "k8s-ai-deployment",
    title: "Scalable Multi-Pod AI Deployment Infrastructure",
    tagline: "Containerized Django & Hugging Face Orchestration",
    category: "Cloud & MLOps",
    isFlagship: true,
    status: "Completed & Verified",
    technologies: [
      "Django",
      "Hugging Face",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Minikube",
      "Linux Mint"
    ],
    metrics: [
      {
        label: "Orchestration",
        value: "Multi-Pod",
        context: "Hand-written pod configurations in Minikube on virtualized Linux Mint"
      },
      {
        label: "Delivery Pipeline",
        value: "Automated",
        context: "Automated container builds and registry pushes with GitHub Actions"
      }
    ],
    bullets: [
      "Packaged a Django backend and a Hugging Face inference engine into Docker containers and orchestrated them as a multi-pod Kubernetes deployment (Minikube) in a virtualized Linux Mint environment, with hand-written pod configs.",
      "Automated container builds and registry pushes with GitHub Actions."
    ],
    githubUrl: "https://github.com/Kabileshwar-G"
  },
  {
    id: "gym-management-dashboard",
    title: "Comprehensive Gym Management Dashboard",
    tagline: "End-to-End Member Management Application",
    category: "Full-Stack Web",
    isFlagship: false,
    status: "Completed & Verified",
    technologies: [
      "React.js",
      "Node.js/Express",
      "MySQL",
      "Bootstrap"
    ],
    metrics: [
      {
        label: "Architecture",
        value: "Full-Stack",
        context: "React/Bootstrap frontend, Node/Express REST API, MySQL schema"
      },
      {
        label: "Implementation",
        value: "End-to-End",
        context: "Full-stack member management system built completely from scratch"
      }
    ],
    bullets: [
      "Full-stack member management app: React/Bootstrap frontend, Node/Express REST API, MySQL schema. Built end to end."
    ],
    githubUrl: "https://github.com/Kabileshwar-G"
  },
  {
    id: "multimodal-fitness-nutrition-ai",
    title: "Multimodal Fitness & Nutrition AI Assistant",
    tagline: "Visual Data Processing & ChromaDB RAG Pipeline",
    category: "Generative AI & RAG",
    isFlagship: false,
    status: "Completed & Verified",
    technologies: [
      "OpenAI Vision API",
      "RAG",
      "ChromaDB",
      "Python"
    ],
    metrics: [
      {
        label: "Integration",
        value: "Multimodal",
        context: "Integrates OpenAI Vision API with ChromaDB RAG"
      },
      {
        label: "Target Data",
        value: "Gym & Nutrition",
        context: "Processes unstructured gym and nutrition imagery and metrics"
      }
    ],
    bullets: [
      "Built a RAG pipeline over ChromaDB that integrates the OpenAI Vision API to process unstructured gym and nutrition data."
    ],
    githubUrl: "https://github.com/Kabileshwar-G"
  },
  {
    id: "content-creator-portfolio",
    title: "Content Creator Portfolio & Asset Manager",
    tagline: "Custom SQL Schema & Session Authentication",
    category: "Full-Stack Web",
    isFlagship: false,
    status: "Completed & Verified",
    technologies: [
      "PHP",
      "SQL",
      "Session-Based Auth"
    ],
    metrics: [
      {
        label: "Auth Model",
        value: "Native PHP Sessions",
        context: "Built login and session handling from scratch in PHP"
      },
      {
        label: "Data Model",
        value: "Custom SQL",
        context: "Relational schema for tagging and organizing streaming assets"
      }
    ],
    bullets: [
      "Built login and session handling from scratch in PHP, with a custom SQL schema for tagging and organizing streaming assets."
    ],
    githubUrl: "https://github.com/Kabileshwar-G"
  }
];
