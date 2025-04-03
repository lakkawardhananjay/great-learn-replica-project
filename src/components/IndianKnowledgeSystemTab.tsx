
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card';

const IndianKnowledgeSystemTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integration with Indian Knowledge System</CardTitle>
        <CardDescription>
          Exploring cybersecurity through the lens of ancient Indian wisdom and knowledge systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Ancient Indian Security Practices</h3>
            <p className="text-gray-700">
              India's rich history includes sophisticated methods of information protection that date back thousands of years. 
              From the cryptographic techniques found in ancient texts to the elaborate physical security systems employed to protect 
              knowledge in ancient universities like Nalanda and Takshashila, these historical practices provide valuable context for modern cybersecurity approaches.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Ethical Frameworks from Indian Philosophy</h3>
            <p className="text-gray-700">
              Indian philosophical traditions emphasize ethical conduct and responsibility. Concepts like "Dharma" (righteous duty) 
              and "Ahimsa" (non-violence) can inform modern cybersecurity ethics, providing frameworks for responsible 
              disclosure, privacy protection, and the ethical use of security tools.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Holistic Security Approaches</h3>
            <p className="text-gray-700">
              Traditional Indian knowledge systems approached problems holistically, considering multiple interconnected factors. 
              This perspective aligns with modern "defense in depth" security strategies and offers insights for developing 
              comprehensive security postures that address technological, human, and procedural aspects of protection.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h4 className="font-semibold text-green-800 mb-2">Coming Soon</h4>
            <p>We're developing comprehensive course materials that bridge ancient Indian knowledge systems with contemporary cybersecurity practices. Stay tuned for upcoming modules exploring these connections in greater depth.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndianKnowledgeSystemTab;
