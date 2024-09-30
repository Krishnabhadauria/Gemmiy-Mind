import React, { useState, useRef } from 'react';
import './MoodTracker.css';

const moodQuestions = [
  "How happy do you feel today?",
  "How anxious do you feel today?",
  "How motivated are you to accomplish tasks?",
  "How often do you feel positive today?",
  "How satisfied are you with your social life?",
  "How overwhelmed do you feel with your responsibilities?",
  "How energetic do you feel right now?",
  "How often do you feel calm today?",
  "How optimistic are you about the future?",
  "How well did you sleep last night?",
];

function MoodTracker() {
  const [moodEvaluation, setMoodEvaluation] = useState('');
  const [message, setMessage] = useState('');
  const resultRef = useRef(null); // Create a reference for the result section

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const moodScores = Array.from(formData.values()).map(Number);
    const moodScore = moodScores.reduce((a, b) => a + b, 0);
    const avgMood = moodScore / moodScores.length;

    let evaluation;
    let msg;
    if (avgMood <= 2) {
      evaluation = "It seems like you're feeling down.";
      msg = "Don't worry, it's okay to feel down sometimes. Take a deep breath and try to focus on the positive things in your life.";
    } else if (avgMood <= 3.5) {
      evaluation = "Your mood is neutral.";
      msg = "You're doing okay, but maybe there's room for improvement. Try to do something that makes you happy today!";
    } else {
      evaluation = "You're feeling pretty good!";
      msg = "That's great to hear! Keep up the good work and remember to take care of yourself.";
    }

    setMoodEvaluation(evaluation);
    setMessage(msg);

    // Scroll to the result section after submission
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="MoodTracker">
      <div className="question-container">
        <form onSubmit={handleSubmit}>
          {moodQuestions.map((question, index) => (
            <div key={index} className="question-box">
              <label>
                {question}
              </label>
              <select name={`mood${index + 1}`} required>
                <option value="">Select a rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
      {moodEvaluation && (
        <div ref={resultRef} className="evaluation">
          <h3>Mood Evaluation:</h3>
          <p>{moodEvaluation}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default MoodTracker;
