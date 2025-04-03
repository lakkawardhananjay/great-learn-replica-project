
import React, { useState } from 'react';
import { Progress } from './ui/progress';
import UnitCard from './UnitCard';
import UnitNotes from './UnitNotes';
import CybersecurityQuiz from './CybersecurityQuiz';
import { Unit } from '../data/cybersecurityUnits';

type CybersecurityTabContentProps = {
  units: Unit[];
  completedQuizzes: number[];
  onQuizComplete: (unitId: number) => void;
};

const CybersecurityTabContent = ({ 
  units, 
  completedQuizzes, 
  onQuizComplete 
}: CybersecurityTabContentProps) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentUnit, setCurrentUnit] = useState<Unit | null>(null);
  const [showNotes, setShowNotes] = useState(false);

  const progressPercentage = (completedQuizzes.length / units.length) * 100;

  const handleStartQuiz = (unit: Unit) => {
    setCurrentUnit(unit);
    setShowQuiz(true);
    setShowNotes(false);
  };

  const handleViewNotes = (unit: Unit) => {
    setCurrentUnit(unit);
    setShowNotes(true);
    setShowQuiz(false);
  };

  const handleBackFromNotes = () => {
    setShowNotes(false);
  };

  const handleQuizComplete = (unitId: number) => {
    onQuizComplete(unitId);
    setShowQuiz(false);
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">Your Learning Progress</h3>
          <span className="text-sm font-medium text-green-800">
            {completedQuizzes.length}/{units.length} Units Completed
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
        <UnitNotes unit={currentUnit} onBack={handleBackFromNotes} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              isCompleted={completedQuizzes.includes(unit.id)}
              onStartQuiz={handleStartQuiz}
              onViewNotes={handleViewNotes}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CybersecurityTabContent;
