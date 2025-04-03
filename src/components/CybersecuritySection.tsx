import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Shield, ShieldCheck, Lock, Server, Database, CheckCircle, FileText, ArrowLeft, File } from 'lucide-react';
import CybersecurityQuiz from './CybersecurityQuiz';

type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

type Unit = {
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

const cybersecurityUnits: Unit[] = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description: "Understand the fundamentals of cybersecurity and its importance",
    icon: <Shield className="h-8 w-8 text-green-800" />,
    content: "This unit covers the basic concepts of cybersecurity including threat types, common vulnerabilities, and the importance of security in modern digital ecosystems. You'll learn about the CIA triad (Confidentiality, Integrity, Availability) and how it forms the foundation of information security practices.",
    pdfUrl: "/pdfs/introduction-to-cybersecurity.pdf",
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
  }
];

const CybersecuritySection = () => {
  const [activeTab, setActiveTab] = useState("unit-1");
  const [completedQuizzes, setCompletedQuizzes] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentUnit, setCurrentUnit] = useState<Unit | null>(null);
  const [showNotes, setShowNotes] = useState(false);

  const progressPercentage = (completedQuizzes.length / cybersecurityUnits.length) * 100;

  const handleStartQuiz = (unit: Unit) => {
    setCurrentUnit(unit);
    setShowQuiz(true);
    setShowNotes(false);
  };

  const handleQuizComplete = (unitId: number) => {
    if (!completedQuizzes.includes(unitId)) {
      setCompletedQuizzes([...completedQuizzes, unitId]);
    }
    setShowQuiz(false);
  };

  const handleViewNotes = (unit: Unit) => {
    setCurrentUnit(unit);
    setShowNotes(true);
    setShowQuiz(false);
  };

  const handleBackFromNotes = () => {
    setShowNotes(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cybersecurity Program</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master the skills needed to protect information systems and digital assets from cyber threats
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">Your Learning Progress</h3>
            <span className="text-sm font-medium text-green-800">
              {completedQuizzes.length}/{cybersecurityUnits.length} Units Completed
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3 bg-gray-200" />
        </div>

        {showQuiz && currentUnit ? (
          <CybersecurityQuiz 
            unit={currentUnit} 
            onComplete={() => handleQuizComplete(currentUnit.id)} 
            onBack={() => setShowQuiz(false)} 
          />
        ) : showNotes && currentUnit ? (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={handleBackFromNotes}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <CardTitle>{currentUnit.title} - Notes</CardTitle>
                <div></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-6">
                <File className="h-16 w-16 text-red-500" />
                <h3 className="text-xl font-semibold">{currentUnit.title} Learning Material</h3>
                <p className="text-center text-gray-600">
                  Access comprehensive learning materials for this unit in PDF format.
                </p>
                <Button className="bg-green-800 hover:bg-green-900 flex items-center gap-2" onClick={() => window.open(currentUnit.pdfUrl, '_blank')}>
                  <FileText className="h-4 w-4" /> Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="unit-1" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
              {cybersecurityUnits.map((unit) => (
                <TabsTrigger 
                  key={unit.id} 
                  value={`unit-${unit.id}`}
                  className="relative"
                >
                  Unit {unit.id}
                  {completedQuizzes.includes(unit.id) && (
                    <CheckCircle className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {cybersecurityUnits.map((unit) => (
              <TabsContent key={unit.id} value={`unit-${unit.id}`}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {unit.icon}
                      <div>
                        <CardTitle>{unit.title}</CardTitle>
                        <CardDescription>{unit.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      {unit.content}
                    </p>
                    <h4 className="font-semibold mt-6 mb-2">What You'll Learn:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Key concepts and terminology in {unit.title.toLowerCase()}</li>
                      <li>Practical applications and best practices</li>
                      <li>Industry standards and emerging trends</li>
                      <li>Hands-on skills through practical exercises</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => handleViewNotes(unit)}
                    >
                      <FileText className="h-4 w-4" /> View Notes
                    </Button>
                    <Button 
                      onClick={() => handleStartQuiz(unit)}
                      className={`bg-green-800 hover:bg-green-900 ${completedQuizzes.includes(unit.id) ? "bg-green-600 hover:bg-green-700" : ""}`}
                    >
                      {completedQuizzes.includes(unit.id) ? "Retake Quiz" : "Start Quiz"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default CybersecuritySection;
