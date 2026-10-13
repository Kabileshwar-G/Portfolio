export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    detail?: string;
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    description: "Core programming and scripting languages.",
    skills: [
      { name: "Python", detail: "Primary language for AI/ML pipelines and backend APIs", highlight: true },
      { name: "Java", detail: "Object-oriented systems and Spring Boot backend", highlight: true },
      { name: "JavaScript (ES6+)", detail: "Frontend interfaces and Node.js runtime", highlight: true },
      { name: "SQL", detail: "Complex joins, subqueries, normalization, and window functions", highlight: true },
      { name: "PHP", detail: "Form handling and session management" },
      { name: "Bash", detail: "Scripting basics and automation" },
    ]
  },
  {
    id: "core-cs",
    name: "Core CS Fundamentals",
    description: "Algorithmic problem-solving, object-oriented design, and OS internals.",
    skills: [
      { name: "Data Structures & Algorithms", detail: "Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, Recursion, Two Pointers, Dynamic Programming", highlight: true },
      { name: "OOP", detail: "Inheritance, Polymorphism, Encapsulation, Abstraction", highlight: true },
      { name: "Operating Systems", detail: "Process Management, Threading, Memory Management, Virtual Memory, Deadlocks", highlight: true },
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Responsive web engineering and dynamic data visualization.",
    skills: [
      { name: "React.js", detail: "State Management, Hooks, Virtual DOM, React Router", highlight: true },
      { name: "Next.js", detail: "SSR and full-stack React framework", highlight: true },
      { name: "Tailwind CSS", detail: "Utility-first modern styling", highlight: true },
      { name: "HTML5 & CSS3", detail: "Semantic markup and responsive layouts" },
      { name: "Bootstrap", detail: "Grid layouts and rapid prototyping" },
      { name: "D3.js", detail: "Dynamic data visualizations and live graph telemetry", highlight: true },
    ]
  },
  {
    id: "backend-apis",
    name: "Backend & APIs",
    description: "Robust REST services, asynchronous APIs, and real-time sockets.",
    skills: [
      { name: "Node.js & Express.js", detail: "REST APIs, middleware, and backend routing", highlight: true },
      { name: "Spring Boot", detail: "Enterprise Java REST services", highlight: true },
      { name: "FastAPI", detail: "High-performance Python asynchronous API for ML serving", highlight: true },
      { name: "Django", detail: "Python web framework and ORM", highlight: true },
      { name: "PHP", detail: "Form handling and session management" },
      { name: "REST APIs", detail: "HTTP Methods, Status Codes, JSON Handling", highlight: true },
      { name: "WebSockets", detail: "Real-time bidirectional event streaming" },
    ]
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational persistence, in-memory caching, and vector indexing.",
    skills: [
      { name: "MySQL", detail: "Relational modeling, normalization (1NF–3NF), transactions", highlight: true },
      { name: "MongoDB", detail: "Document store including Atlas Vector Search", highlight: true },
      { name: "Redis", detail: "In-memory caching and live dependency graph store", highlight: true },
      { name: "Database Internals", detail: "ACID Properties, Normalization, Indexing, Complex Joins, Subqueries, Window Functions, Transactions" },
    ]
  },
  {
    id: "math-stats",
    name: "Math & Statistics",
    description: "Mathematical foundations for statistical learning and evaluation.",
    skills: [
      { name: "Linear Algebra", detail: "Matrix operations, eigenvalues, vector spaces", highlight: true },
      { name: "Calculus", detail: "Optimization, gradients, differentiation", highlight: true },
      { name: "Probability & Hypothesis Testing", detail: "Statistical distributions and significance tests" },
      { name: "A/B Testing & Confidence Intervals", detail: "Empirical experimentation metrics" },
      { name: "Econometrics", detail: "Statistical modeling of observational data" },
    ]
  },
  {
    id: "data-processing",
    name: "Data Processing & EDA",
    description: "Data wrangling, cleaning, and dimensionality reduction.",
    skills: [
      { name: "Pandas & NumPy", detail: "Data manipulation, tensor arrays, vectorized calculations", highlight: true },
      { name: "Matplotlib & Seaborn", detail: "Exploratory visualization and distribution analysis" },
      { name: "Data Cleaning & Feature Engineering", detail: "Outlier handling, missing values, normalization", highlight: true },
      { name: "Dimensionality Reduction (PCA)", detail: "Principal component analysis" },
    ]
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    description: "Supervised and unsupervised learning, ensembling, and validation.",
    skills: [
      { name: "Supervised/Unsupervised Learning", detail: "Regression, Classification, Clustering", highlight: true },
      { name: "Ensemble Models", detail: "Random Forest, Gradient Boosting (XGBoost, LightGBM)", highlight: true },
      { name: "Classical ML", detail: "KNN, SVM, Decision Trees" },
      { name: "Model Evaluation", detail: "Train-Test Split, K-Fold Cross-Validation, Accuracy, Precision, Recall, F1, ROC-AUC, Log Loss, Confusion Matrix, MSE", highlight: true },
    ]
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    description: "Neural network architectures, custom loaders, and graph networks.",
    skills: [
      { name: "PyTorch", detail: "Tensor manipulation, custom dataset loaders, training loops", highlight: true },
      { name: "Graph Neural Networks (GNNs)", detail: "Topological node embeddings on dependency graphs", highlight: true },
      { name: "TensorFlow & Keras", detail: "Model development and deep learning workflows" },
      { name: "Neural Architectures", detail: "ANNs, CNNs, RNNs, LSTMs" },
      { name: "Transformers", detail: "Self-Attention, Encoder-Decoder, Multi-head Attention", highlight: true },
      { name: "Generative Models", detail: "Autoencoders, GANs" },
    ]
  },
  {
    id: "nlp-time-series",
    name: "NLP & Time Series",
    description: "Text representation, word embeddings, and time series forecasting.",
    skills: [
      { name: "Time Series Forecasting", detail: "ARIMA modeling and temporal series analysis", highlight: true },
      { name: "Text Preprocessing", detail: "Tokenization, Lemmatization" },
      { name: "Word Embeddings", detail: "Word2Vec, BERT dense embeddings", highlight: true },
    ]
  },
  {
    id: "llm-rag-agentic",
    name: "LLM, RAG & Agentic AI",
    description: "Vector search, retrieval orchestration, and autonomous agent loops.",
    skills: [
      { name: "Foundation Model APIs", detail: "OpenAI API, Google Gemini API, Anthropic Claude API, Hugging Face Hub", highlight: true },
      { name: "Vector Databases & Search", detail: "ChromaDB, Pinecone, FAISS, MongoDB Atlas Vector Search", highlight: true },
      { name: "RAG & Chunking", detail: "Chunking Strategies, Embeddings, LangChain, LlamaIndex", highlight: true },
      { name: "Autonomous AI Agents", detail: "OpenAI Functions, ReAct framework, Autonomous Agents", highlight: true },
      { name: "Prompt Engineering", detail: "Context Management, Prompt Injection Mitigation, Token Optimization", highlight: true },
    ]
  },
  {
    id: "multimodal-safety",
    name: "Multimodal & AI Safety",
    description: "Vision/speech APIs, output constraints, and security verification.",
    skills: [
      { name: "Multimodal Generation", detail: "Image Generation, DALL-E, Vision APIs, Audio Processing (Whisper API)", highlight: true },
      { name: "AI Safety & Guardrails", detail: "OpenAI Moderation API, Adversarial Testing, Output Constraining", highlight: true },
      { name: "Compliance & Monitoring", detail: "Security/Privacy Compliance, Latency Logging, Token Usage Tracking" },
    ]
  },
  {
    id: "streaming-distributed",
    name: "Streaming & Distributed Systems",
    description: "Event-driven microservices and high-throughput real-time pipelines.",
    skills: [
      { name: "Apache Kafka", detail: "Event-driven pipelines, streaming traces, topics", highlight: true },
      { name: "Event-Driven Architecture", detail: "Decoupled asynchronous message brokers", highlight: true },
      { name: "Microservices", detail: "Distributed polyglot microservice pipelines", highlight: true },
      { name: "Real-Time Systems", detail: "Live dependency graphs and WebSocket alert triggers" },
    ]
  },
  {
    id: "mlops-devops-cloud",
    name: "MLOps, DevOps & Cloud",
    description: "Containerization, Kubernetes orchestration, CI/CD, and cloud platforms.",
    skills: [
      { name: "Docker", detail: "Dockerfiles, image management, multi-container stacks", highlight: true },
      { name: "Kubernetes", detail: "Minikube, pod configuration/YAML, multi-app pods", highlight: true },
      { name: "MLflow", detail: "Experiment tracking, parameters, metric logging", highlight: true },
      { name: "GitHub Actions", detail: "Automated container builds and registry pushes", highlight: true },
      { name: "Cloud & Virtualization", detail: "AWS, GCP, Virtual Environments (VirtualBox/venv)" },
    ]
  },
  {
    id: "tools-environments",
    name: "Tools & Environments",
    description: "Version control, Linux administration, and developer toolchains.",
    skills: [
      { name: "Git / GitHub", detail: "Commit workflows, branching, pull requests, merge conflict resolution", highlight: true },
      { name: "Linux Administration", detail: "Linux Mint, Ubuntu, file permissions, local servers", highlight: true },
      { name: "Tooling", detail: "VS Code, Web Hosting, Local Servers" },
    ]
  }
];
