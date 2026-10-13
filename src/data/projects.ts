export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Deep Learning & RL" | "Distributed Systems & AI/ML" | "Generative AI & RAG" | "Cloud & MLOps";
  isFlagship: boolean;
  status: "Completed & Verified" | "Research Paper (IEEE)" | "Simulation Benchmark";
  technologies: string[];
  metrics: ProjectMetric[];
  bullets: string[];
  githubUrl: string;
  preprintUrl?: string;
}

export const projects: Project[] = [
  {
    id: "solar-energy-management",
    title: "Intelligent Solar Energy Management System",
    tagline: "LSTM-Based Solar Forecasting & Deep Q-Network (DQN) Grid Optimization",
    category: "Deep Learning & RL",
    isFlagship: true,
    status: "Research Paper (IEEE)",
    technologies: [
      "Python",
      "PyTorch",
      "LSTM Networks",
      "Deep Q-Network (DQN)",
      "Reinforcement Learning",
      "Time-Series Forecasting",
      "NumPy / Pandas",
      "Smart Grid Simulation"
    ],
    metrics: [
      {
        label: "Performance Improvement",
        value: "81.55%",
        context: "Outperformed baseline rule-based energy management strategies by 81.55% (reduced loss from -2379.94 to -439.16)"
      },
      {
        label: "Decision Space",
        value: "4 Discrete Actions",
        context: "DQN agent selects optimal real-time actions: store, use, sell, or wait"
      },
      {
        label: "Cyclic Encoding",
        value: "Sinusoidal Math",
        context: "Sinusoidal temporal mapping (hour_sin/hour_cos) capturing continuous solar periodic cycles"
      }
    ],
    bullets: [
      "Designed and implemented a hybrid clean-tech AI framework combining stacked LSTM time-series forecasting with Deep Q-Network (DQN) reinforcement learning for proactive smart grid energy control.",
      "Engineered an environmental feature pipeline (temperature, wind speed, relative humidity, solar irradiance) normalized via Min-Max scaling with sinusoidal cyclic time encoding to eliminate temporal boundary discontinuities.",
      "Formulated a Markov Decision Process (MDP) over 5D state vectors (predicted solar, environmental sensors, battery level) with a reward function penalizing battery overflow/depletion and rewarding strategic grid power sales.",
      "Demonstrated an 81.55% performance improvement over conventional rule-based baselines in dynamic smart grid simulation environments, co-authored to IEEE standards."
    ],
    githubUrl: "https://github.com/Kabileshwar-G/Portfolio",
    preprintUrl: "https://github.com/Kabileshwar-G/Portfolio"
  },
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
    githubUrl: "https://github.com/Kabileshwar-G/Portfolio"
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
    githubUrl: "https://github.com/Kabileshwar-G/Portfolio"
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
    githubUrl: "https://github.com/Kabileshwar-G/Portfolio"
  }
];
