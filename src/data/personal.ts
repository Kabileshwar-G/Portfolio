export interface PersonalInfo {
  name: string;
  headline: string;
  subHeadline: string;
  education: {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    graduation: string;
    cgpaOverall: string;
    cgpaRecentSemester: string;
    coursework: string[];
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  bioParagraphs: string[];
  quickStats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Kabileshwar G",
  headline: "Full-Stack Engineer & AI/ML Researcher — SRM CSE (AI/ML), Class of 2027",
  subHeadline: "Full-Stack Systems & Applied AI/ML Research",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Artificial Intelligence and Machine Learning",
    institution: "SRM Institute of Science and Technology",
    location: "Trichy, Tamil Nadu, India",
    graduation: "Expected May 2027",
    cgpaOverall: "8.02 / 10",
    cgpaRecentSemester: "8.6 / 10",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Linear Algebra",
      "Operating Systems",
      "DBMS"
    ],
  },
  contact: {
    email: "kabileshwar2006@gmail.com",
    phone: "8825660580",
    location: "Trichy, Tamil Nadu, India",
    linkedin: "https://linkedin.com/in/kabileshwar-g",
    github: "https://github.com/Kabileshwar-G",
  },
  bioParagraphs: [
    "CSE (AI/ML) student working across two tracks: full-stack and distributed systems (React, Node, Spring Boot, Kafka, Docker/Kubernetes) and applied AI/ML (PyTorch, GNNs, RAG, multi-agent systems).",
    "Author of seven independent engineering projects, two AI/ML industry internships, and an academic research preprint formatted to IEEE standards on autonomous medical resource allocation."
  ],
  quickStats: [
    {
      label: "AI/ML Internships",
      value: "2",
      description: "Innovate (Healthcare ML) & EduSkills (Predictive Models)"
    },
    {
      label: "Engineered Projects",
      value: "7",
      description: "Distributed systems, RAG, Multi-Agent RL & full-stack apps"
    },
    {
      label: "Research Preprint",
      value: "1",
      description: "Autonomous Medical Resource Allocation (IEEE Standard)"
    },
    {
      label: "Academic Standing",
      value: "8.02",
      description: "CGPA / 10 (Recent semester: 8.6 / 10) · SRM IST"
    }
  ]
};
