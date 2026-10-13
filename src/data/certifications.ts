export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "dl-specialization",
    name: "Deep Learning Specialization (DeepLearning.AI, Andrew Ng)",
    issuer: "Coursera",
    issueDate: "May 2026"
  },
  {
    id: "aws-genai",
    name: "Generative AI Foundations Workshop",
    issuer: "AWS Academy",
    issueDate: "Oct 2025"
  }
];
