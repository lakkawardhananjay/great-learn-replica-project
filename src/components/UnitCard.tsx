
import React from 'react';
import { CheckCircle, FileText } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Unit } from '../data/cybersecurityUnits';

type UnitCardProps = {
  unit: Unit;
  isCompleted: boolean;
  onStartQuiz: (unit: Unit) => void;
  onViewNotes: (unit: Unit) => void;
};

const UnitCard = ({ unit, isCompleted, onStartQuiz, onViewNotes }: UnitCardProps) => {
  return (
    <Card key={unit.id} className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          {unit.icon}
          <div>
            <CardTitle className="text-xl">{unit.title}</CardTitle>
            <CardDescription>{unit.description}</CardDescription>
          </div>
          {isCompleted && (
            <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 mb-4 line-clamp-3">
          {unit.content}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto">
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => onViewNotes(unit)}
        >
          <FileText className="h-4 w-4" /> View Notes
        </Button>
        <Button 
          onClick={() => onStartQuiz(unit)}
          className={`bg-green-800 hover:bg-green-900 ${isCompleted ? "bg-green-600 hover:bg-green-700" : ""}`}
        >
          {isCompleted ? "Retake Quiz" : "Start Quiz"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UnitCard;
