
import React from 'react';
import { Shield, ShieldCheck, Lock, Server, Database, Globe } from 'lucide-react';

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Unit = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: string;
  pdfUrl: string;
  quiz: {
    title: string;
    questions: QuizQuestion[];
  };
};

export const cybersecurityUnits: Unit[] = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description: "Understand the fundamentals of cybersecurity and its importance",
    icon: <Shield className="h-8 w-8 text-green-800" />,
    content: "This unit covers the basic concepts of cybersecurity including threat types, common vulnerabilities, and the importance of security in modern digital ecosystems. You'll learn about the CIA triad (Confidentiality, Integrity, Availability) and how it forms the foundation of information security practices.",
    pdfUrl: "/pdfs/CS_Chapt-1 Notes.pdf",
    quiz: {
      title: "Cybersecurity Fundamentals Quiz",
      questions: [
        {
          id: 1,
          question: "What does the 'C' stand for in CIA triad?",
          options: ["Control", "Confidentiality", "Cybersecurity", "Computing"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which of the following is NOT a common type of cyber threat?",
          options: ["Malware", "Phishing", "Firewall", "Ransomware"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "What is a vulnerability in cybersecurity?",
          options: ["A type of malware", "A weakness that can be exploited", "A security tool", "An encryption method"],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 2,
    title: "Network Security",
    description: "Learn how to secure networks and prevent unauthorized access",
    icon: <Server className="h-8 w-8 text-green-800" />,
    content: "Network security focuses on protecting the integrity, confidentiality, and accessibility of computer networks and data. This unit covers firewalls, intrusion detection systems, VPNs, network protocols, and secure network architectures to defend against various network-based attacks.",
    pdfUrl: "/pdfs/network-security.pdf",
    quiz: {
      title: "Network Security Quiz",
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of a firewall?",
          options: ["Encrypt data", "Block unauthorized access", "Speed up network", "Create backups"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which protocol is commonly used for secure web browsing?",
          options: ["HTTP", "FTP", "HTTPS", "SMTP"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "What does VPN stand for?",
          options: ["Virtual Private Network", "Visual Processing Node", "Variable Protocol Network", "Virtual Public Network"],
          correctAnswer: 0
        }
      ]
    }
  },
  {
    id: 3,
    title: "Cryptography and Encryption",
    description: "Explore methods to secure data through encryption techniques",
    icon: <Lock className="h-8 w-8 text-green-800" />,
    content: "This unit explores the science of encrypting information to protect data during storage and transmission. You'll learn about symmetric and asymmetric encryption, hashing algorithms, digital signatures, and the mathematical principles behind modern cryptographic systems.",
    pdfUrl: "/pdfs/cryptography-and-encryption.pdf",
    quiz: {
      title: "Cryptography Quiz",
      questions: [
        {
          id: 1,
          question: "Which encryption type uses the same key for encryption and decryption?",
          options: ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Digital signatures"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "What is the purpose of a hash function?",
          options: ["Encrypt data", "Decrypt data", "Generate a fixed-size output from variable input", "All of the above"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "RSA is an example of:",
          options: ["Symmetric encryption", "Asymmetric encryption", "Hashing algorithm", "Network protocol"],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 4,
    title: "Security Governance and Risk Management",
    description: "Master the principles of governance, compliance, and risk assessment",
    icon: <ShieldCheck className="h-8 w-8 text-green-800" />,
    content: "This unit covers the frameworks, policies, and procedures that guide an organization's security program. Topics include security policies, risk assessment methodologies, compliance regulations like GDPR and HIPAA, and security governance frameworks such as NIST and ISO 27001.",
    pdfUrl: "/pdfs/security-governance.pdf",
    quiz: {
      title: "Governance and Risk Quiz",
      questions: [
        {
          id: 1,
          question: "What does GDPR stand for?",
          options: ["General Data Protection Regulation", "Global Data Privacy Rules", "Governance Data Protection Requirements", "General Digital Privacy Rights"],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which of the following is NOT a component of risk management?",
          options: ["Risk identification", "Risk assessment", "Risk elimination", "Risk mitigation"],
          correctAnswer: 2
        },
        {
          id: 3,
          question: "What is the primary purpose of a security policy?",
          options: ["To prevent all attacks", "To provide guidelines for security practices", "To replace technical controls", "To eliminate risk"],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: 5,
    title: "Incident Response and Recovery",
    description: "Develop skills to respond to security incidents and implement recovery plans",
    icon: <Database className="h-8 w-8 text-green-800" />,
    content: "Learn how organizations prepare for, detect, contain, and recover from security incidents. This unit covers incident response plans, forensic investigation techniques, business continuity planning, and disaster recovery strategies to minimize damage and restore operations after a security breach.",
    pdfUrl: "/pdfs/incident-response.pdf",
    quiz: {
      title: "Incident Response Quiz",
      questions: [
        {
          id: 1,
          question: "What is the first step in incident response?",
          options: ["Containment", "Eradication", "Preparation", "Identification"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "What does RTO stand for in disaster recovery?",
          options: ["Real-Time Operation", "Recovery Time Objective", "Return To Operation", "Restore Time Order"],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "Which of these is NOT typically part of a forensic investigation?",
          options: ["Evidence collection", "Chain of custody", "Data recovery", "Preventive maintenance"],
          correctAnswer: 3
        }
      ]
    }
  },
  {
    id: 6,
    title: "Advanced Threat Intelligence",
    description: "Learn techniques to identify, analyze, and respond to advanced cyber threats",
    icon: <Globe className="h-8 w-8 text-green-800" />,
    content: "This unit focuses on advanced threat intelligence concepts and practices. You'll learn how to collect, analyze, and utilize threat data to improve your organization's security posture. Topics include threat intelligence platforms, intelligence sharing frameworks, attribution techniques, and proactive threat hunting methodologies.",
    pdfUrl: "/pdfs/advanced-threat-intelligence.pdf",
    quiz: {
      title: "Advanced Threat Intelligence Quiz",
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of threat intelligence?",
          options: ["Blocking all threats", "Understanding adversary tactics", "Eliminating the need for firewalls", "Increasing network speed"],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Which of these is NOT a common source of threat intelligence?",
          options: ["Dark web monitoring", "Security vendor reports", "Social media analysis", "Employee performance reviews"],
          correctAnswer: 3
        },
        {
          id: 3,
          question: "What does IOC stand for in threat intelligence?",
          options: ["Internal Operation Control", "Indicator Of Compromise", "Internet Of Computing", "Integrated Online Control"],
          correctAnswer: 1
        }
      ]
    }
  }
];
