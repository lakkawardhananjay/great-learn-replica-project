
import React from 'react';
import { ArrowLeft, File, FileText } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Unit } from '../data/cybersecurityUnits';

type UnitNotesProps = {
  unit: Unit;
  onBack: () => void;
};

const UnitNotes = ({ unit, onBack }: UnitNotesProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <CardTitle>{unit.title} - Notes</CardTitle>
          <div></div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-6">
          <File className="h-16 w-16 text-red-500" />
          <h3 className="text-xl font-semibold">{unit.title} Learning Material</h3>
          <p className="text-center text-gray-600">
            Access comprehensive learning materials for this unit in PDF format.
          </p>
          <Button className="bg-green-800 hover:bg-green-900 flex items-center gap-2" onClick={() => window.open(unit.pdfUrl, '_blank')}>
            <FileText className="h-4 w-4" /> Download PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitNotes;
