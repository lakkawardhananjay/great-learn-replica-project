
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

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
  quiz: {
    title: string;
    questions: QuizQuestion[];
  };
};

type CybersecurityQuizProps = {
  unit: Unit;
  onComplete: () => void;
  onBack: () => void;
};

const CybersecurityQuiz = ({ unit, onComplete, onBack }: CybersecurityQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(unit.quiz.questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = unit.quiz.questions[currentQuestionIndex];
  
  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < unit.quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    return unit.quiz.questions.reduce((score, question, index) => {
      return question.correctAnswer === answers[index] ? score + 1 : score;
    }, 0);
  };

  const score = calculateScore();
  const totalQuestions = unit.quiz.questions.length;
  const scorePercentage = (score / totalQuestions) * 100;

  if (showResults) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">{unit.quiz.title} Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold mb-4 text-greatblue">{score} / {totalQuestions}</div>
            <div className="text-lg mb-2">
              Your score: {scorePercentage.toFixed(0)}%
            </div>
            <div className={`text-lg font-medium ${scorePercentage >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
              {scorePercentage >= 70 ? 'Congratulations!' : 'Keep learning!'}
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <h3 className="font-semibold">Question Review:</h3>
            {unit.quiz.questions.map((question, index) => (
              <div key={question.id} className="p-4 border rounded-lg">
                <div className="flex items-start gap-2">
                  {answers[index] === question.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                  )}
                  <div>
                    <div className="font-medium">{question.question}</div>
                    <div className="text-sm mt-1">
                      Your answer: {answers[index] >= 0 ? question.options[answers[index]] : 'Not answered'}
                    </div>
                    {answers[index] !== question.correctAnswer && (
                      <div className="text-sm mt-1 text-green-600">
                        Correct answer: {question.options[question.correctAnswer]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Units
          </Button>
          <Button onClick={onComplete}>Complete Quiz</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <CardTitle>{unit.quiz.title}</CardTitle>
          <div className="text-sm font-medium">
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <h3 className="text-lg font-medium">{currentQuestion.question}</h3>
          
          <RadioGroup 
            value={answers[currentQuestionIndex] === -1 ? undefined : answers[currentQuestionIndex].toString()}
            onValueChange={handleAnswerChange}
          >
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-gray-50">
                  <RadioGroupItem id={`option-${index}`} value={index.toString()} />
                  <Label className="flex-1 cursor-pointer" htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        <Button 
          onClick={handleNext}
          disabled={answers[currentQuestionIndex] === -1}
        >
          {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CybersecurityQuiz;
