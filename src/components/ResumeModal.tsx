import React, { useEffect } from 'react';
import { X, Printer } from 'lucide-react';
import { personalInfo } from '../data/personal';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white text-neutral-900 border border-neutral-300 rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto no-scrollbar flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printed) */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between p-4 bg-neutral-900 text-white backdrop-blur-md border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm sm:text-base">
              Resume Preview — Kabileshwar G
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
              Official Resume Record
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 bg-white text-neutral-900 font-sans text-xs sm:text-[13px] leading-normal selection:bg-neutral-200">
          {/* Header */}
          <div className="text-center border-b border-neutral-300 pb-3 mb-3">
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 uppercase mb-0.5">
              Kabileshwar G
            </h1>
            <p className="font-medium text-neutral-800 text-xs sm:text-sm">
              Full-Stack Engineer & AI/ML Researcher — SRM CSE (AI/ML), Class of 2027
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-600 mt-1 font-mono">
              <span>{personalInfo.contact.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.contact.email}`} className="text-neutral-900 hover:underline">
                {personalInfo.contact.email}
              </a>
              <span>•</span>
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noreferrer" className="text-neutral-900 hover:underline">
                linkedin.com/in/kabileshwar-g
              </a>
              <span>•</span>
              <a href={personalInfo.contact.github} target="_blank" rel="noreferrer" className="text-neutral-900 hover:underline">
                github.com/Kabileshwar-G
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1 font-mono">
              Profile
            </h2>
            <p className="text-neutral-700 leading-relaxed text-justify">
              CSE (AI/ML) student working across two tracks: full-stack and distributed systems (React, Node, Spring Boot, Kafka, Docker/Kubernetes) and applied AI/ML (PyTorch, GNNs, RAG, multi-agent systems). Seven independent projects, two AI/ML internships, and a research preprint written to IEEE standards.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-1 text-[11px] sm:text-xs">
              <div>
                <strong className="text-neutral-900">Languages:</strong> Python, Java, JavaScript (ES6+), SQL, PHP, Bash (scripting basics)
              </div>
              <div>
                <strong className="text-neutral-900">Core CS Fundamentals:</strong> Data Structures & Algorithms (Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, Recursion, Two Pointers, Dynamic Programming); OOP (Inheritance, Polymorphism, Encapsulation, Abstraction); Operating Systems (Process Management, Threading, Memory Management, Virtual Memory, Deadlocks)
              </div>
              <div>
                <strong className="text-neutral-900">Frontend:</strong> HTML5, CSS3, React.js (State Management, Hooks, Virtual DOM, React Router), Next.js, Bootstrap, Tailwind CSS, D3.js
              </div>
              <div>
                <strong className="text-neutral-900">Backend & APIs:</strong> Node.js, Express.js, Spring Boot, FastAPI, Django, PHP (form handling, session management), REST APIs, HTTP Methods & Status Codes, JSON Handling, WebSockets
              </div>
              <div>
                <strong className="text-neutral-900">Databases:</strong> MySQL, MongoDB (incl. Atlas Vector Search), Redis; ACID Properties, Normalization (1NF–3NF), Indexing, Complex Joins, Subqueries, Window Functions, Transactions
              </div>
              <div>
                <strong className="text-neutral-900">Math & Statistics:</strong> Linear Algebra, Calculus, Probability, Hypothesis Testing, Econometrics, A/B Testing, Confidence Intervals
              </div>
              <div>
                <strong className="text-neutral-900">Data Processing & EDA:</strong> Pandas, NumPy, Seaborn, Matplotlib, Data Cleaning, Feature Engineering, Dimensionality Reduction (PCA)
              </div>
              <div>
                <strong className="text-neutral-900">Machine Learning:</strong> Supervised/Unsupervised Learning, KNN, SVM, Decision Trees, Random Forest, Gradient Boosting (XGBoost, LightGBM), Clustering, Regression; Train-Test Split, K-Fold Cross-Validation, Accuracy, Precision, Recall, F1, ROC-AUC, Log Loss, Confusion Matrix, MSE
              </div>
              <div>
                <strong className="text-neutral-900">Deep Learning:</strong> PyTorch, TensorFlow, Keras (tensor manipulation, custom dataset loaders, training loops); ANNs, CNNs, RNNs, LSTMs, Transformers (Self-Attention, Encoder-Decoder, Multi-head Attention), Autoencoders, GANs, Graph Neural Networks
              </div>
              <div>
                <strong className="text-neutral-900">NLP & Time Series:</strong> Time Series Forecasting (ARIMA), Tokenization, Lemmatization, Word Embeddings (Word2Vec, BERT)
              </div>
              <div>
                <strong className="text-neutral-900">LLM, RAG & Agentic AI:</strong> OpenAI API, Google Gemini API, Anthropic Claude API, Hugging Face Hub; RAG, ChromaDB, Pinecone, FAISS, MongoDB Atlas Vector Search, Chunking Strategies, Embeddings; LangChain, LlamaIndex, OpenAI Functions, Autonomous AI Agents; Prompt Engineering (Context Management, ReAct, Prompt Injection Mitigation, Token Optimization)
              </div>
              <div>
                <strong className="text-neutral-900">Multimodal & AI Safety:</strong> Image Generation, DALL-E, Vision APIs, Audio Processing (Whisper API); OpenAI Moderation API, Adversarial Testing, Output Constraining, Security/Privacy Compliance, Latency Logging, Token Usage Tracking
              </div>
              <div>
                <strong className="text-neutral-900">Streaming & Distributed Systems:</strong> Apache Kafka, Event-Driven Architecture, Microservices, Real-Time Systems
              </div>
              <div>
                <strong className="text-neutral-900">MLOps, DevOps & Cloud:</strong> Docker (Dockerfiles, image management), Kubernetes (Minikube, pod configuration/YAML, multi-app pods), MLflow, GitHub Actions (automated container builds & registry pushes), AWS, GCP, Virtual Environments (VirtualBox/venv)
              </div>
              <div>
                <strong className="text-neutral-900">Tools & Environments:</strong> Git/GitHub (commit workflows, branching, pull requests, merge conflict resolution), Linux Administration (Linux Mint, Ubuntu), File Permissions, Local Servers, Web Hosting, VS Code
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 font-mono">
              Experience
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    AI & Machine Learning Intern <span className="font-normal text-neutral-600">| Innovate</span>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-600">
                    May 2025 – Jun 2025 · Chennai, Tamil Nadu
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-[11px] sm:text-xs text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Built and evaluated ML models on healthcare data, pushing diagnostic prediction accuracy up 15% on a set of 10,000+ simulated records.</li>
                  <li>Helped ship "HealthCure," a model that cut patient triage time by 20% through cleaner data processing.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    AI-ML Intern <span className="font-normal text-neutral-600">| EduSkills</span>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-600">
                    Jan 2025 – Mar 2025 · Remote
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-[11px] sm:text-xs text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Built and deployed 3 predictive models end to end, reaching around 85% baseline accuracy.</li>
                  <li>Reworked the preprocessing pipeline, cutting training time by 25% on the final runs.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects (All 7 from resume) */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1.5 font-mono">
              Projects
            </h2>
            <div className="space-y-2 text-[11px] sm:text-xs">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    MicroGuard AI — Distributed Cascade-Failure Prediction System
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    Kafka · Spring Boot · FastAPI · PyTorch GNN · React/Next.js · D3.js · Redis · MLflow · GitHub
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Built an event-driven microservices pipeline (Python, Node.js, Spring Boot) streaming real-time service traces through Kafka into a live dependency graph in Redis.</li>
                  <li>Trained a PyTorch Graph Neural Network on server telemetry to predict cascading failures (85%+ precision), with experiments tracked in MLflow.</li>
                  <li>Served predictions through FastAPI and built a React/Next.js + D3.js dashboard with WebSocket-driven live alerts.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Agentic AI Smart Hospital Bed System
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    Reinforcement Learning · Multi-Agent Systems · GitHub · Preprint (arXiv)
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Authored a research paper on autonomous medical resource allocation, formatted to IEEE standards.</li>
                  <li>Developed multi-agent RL logic to allocate 500+ virtual beds, simulating a 30% reduction in wait times.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Multimodal Fitness & Nutrition AI Assistant
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    OpenAI Vision API · RAG · ChromaDB · GitHub
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Built a RAG pipeline over ChromaDB that integrates the OpenAI Vision API to process unstructured gym and nutrition data.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Scalable Multi-Pod AI Deployment Infrastructure
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    Django · Hugging Face · Docker · Kubernetes · GitHub Actions · GitHub
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Packaged a Django backend and a Hugging Face inference engine into Docker containers and orchestrated them as a multi-pod Kubernetes deployment (Minikube) in a virtualized Linux Mint environment, with hand-written pod configs.</li>
                  <li>Automated container builds and registry pushes with GitHub Actions.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Open-World RAG Knowledge Engine
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    LangChain · ChromaDB · Prompt Engineering · GitHub
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Built a RAG assistant over 10,000+ pages of unstructured text; semantic search cut query latency by 40%.</li>
                  <li>Designed a prompt-management layer that reduced hallucinations, reaching about 95% contextual accuracy in testing.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Comprehensive Gym Management Dashboard
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    React.js · Node.js/Express · MySQL · Bootstrap · GitHub
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Full-stack member management app: React/Bootstrap frontend, Node/Express REST API, MySQL schema. Built end to end.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-neutral-900">
                    Content Creator Portfolio & Asset Manager
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500">
                    PHP · SQL · Session-Based Auth · GitHub
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-neutral-700 space-y-0.5 mt-0.5">
                  <li>Built login and session handling from scratch in PHP, with a custom SQL schema for tagging and organizing streaming assets.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1 font-mono">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <strong className="text-neutral-900">B.Tech CSE — Artificial Intelligence & Machine Learning</strong>
                <div className="text-neutral-700 text-[11px] sm:text-xs">
                  SRM Institute of Science and Technology · Trichy, Tamil Nadu
                </div>
              </div>
              <div className="text-[11px] font-mono text-neutral-600">
                Expected May 2027
              </div>
            </div>
            <div className="mt-1 text-[11px] sm:text-xs text-neutral-700">
              <span className="font-semibold">CGPA:</span> 8.02 / 10 (recent semester: 8.6 / 10)
            </div>
            <div className="text-[11px] text-neutral-600">
              <span className="font-semibold">Coursework:</span> Machine Learning, Deep Learning, Data Structures & Algorithms, Object-Oriented Programming, Linear Algebra, Operating Systems, DBMS
            </div>
          </div>

          {/* Certifications & Workshops */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-0.5 mb-1 font-mono">
              Certifications & Workshops
            </h2>
            <div className="space-y-1 text-[11px] sm:text-xs">
              <div className="flex justify-between">
                <span><strong>Deep Learning Specialization (DeepLearning.AI, Andrew Ng)</strong> | Coursera</span>
                <span className="font-mono text-neutral-600">May 2026</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Generative AI Foundations Workshop</strong> | AWS Academy</span>
                <span className="font-mono text-neutral-600">Oct 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
