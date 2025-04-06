'use client'

import {useState} from 'react'

import questions from "@/data/questions";


const Questionnaire: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const handlePrevious = () => {
        setCurrentQuestion(questions[currentQuestion.id - 1]);
    } 
  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg bg-secondary mt-8">
      <h2 className="mb-8 text-center">IP Guardian Questionnaire</h2>
      
      <div className="bg-primary/30 p-6 rounded-lg">
        <h3 className="mb-6">{currentQuestion.question}</h3>
        
        <ul className="space-y-4 mb-8">
          {currentQuestion.options?.map((option) => (
            <li key={option.label} className="flex items-center gap-2 text-primary-light text-sm font-secondary">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="option" value={option.label} className="form-radio text-highlight"/>
                <span>{option.label}</span>
              </label>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between mt-6">
          {currentQuestion.id === 1 ? null : 
          <button onClick={handlePrevious} className="bg-highlight fonnt-secondary text-accent px-4 py-2 cursor-pointer rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-highlight/80">
            Previous
          </button>}
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;