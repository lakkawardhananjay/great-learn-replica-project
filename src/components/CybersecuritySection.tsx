
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { cybersecurityUnits } from '../data/cybersecurityUnits';
import CybersecurityTabContent from './CybersecurityTabContent';
import IndianKnowledgeSystemTab from './IndianKnowledgeSystemTab';

const CybersecuritySection = () => {
  const [activeTab, setActiveTab] = useState("cybersecurity-tab");
  const [completedQuizzes, setCompletedQuizzes] = useState<number[]>([]);

  const handleQuizComplete = (unitId: number) => {
    if (!completedQuizzes.includes(unitId)) {
      setCompletedQuizzes([...completedQuizzes, unitId]);
    }
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

        <Tabs defaultValue="cybersecurity-tab" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="cybersecurity-tab">Cybersecurity Units</TabsTrigger>
            <TabsTrigger value="indian-knowledge-tab">Integration with Indian Knowledge System</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cybersecurity-tab">
            <CybersecurityTabContent 
              units={cybersecurityUnits}
              completedQuizzes={completedQuizzes}
              onQuizComplete={handleQuizComplete}
            />
          </TabsContent>
          
          <TabsContent value="indian-knowledge-tab">
            <IndianKnowledgeSystemTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CybersecuritySection;
