import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from "react-bootstrap";

function HetEx(){
    const [answers, setAnswers] = useState({});
    const [feedback, setFeedback] = useState({});
  
    const questions = [
      {
        id: "q1",
        text: "What's the capital of France?",
        options: [
          { label: "Paris", value: "Correct!" },
          { label: "London", value: "Incorrect" },
          { label: "Rome", value: "Incorrect" },
        ],
      },
      {
        id: "q2",
        text: "What is 2 + 2?",
        options: [
          { label: "3", value: " Incorrect" },
          { label: "4", value:"Correct!"},
          { label: "5", value: "Incorrect" },
        ],
      },
    ];
  
    const handleAnswers = (e) => {
      const name = e.target.name
      const value= e.target.value
      setAnswers((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = {};
      questions.forEach((q) => {
        result[q.id] = answers[q.id ]
      });
      setFeedback(result);
    };
  
    const allAnswered = questions.every((q) => answers[q.id]);
  
    return (
      <Form onSubmit={handleSubmit}>
        <Container className="py-4">
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <Form.Label><strong>{index + 1}. {q.text}</strong></Form.Label>
              {q.options.map((opt, i) => (
                <Form.Check
                  key={i}
                  type="radio"
                  name={q.id}
                  label={opt.label}
                  value={opt.value || ''}
                  onChange={handleAnswers}
                  className="mb-2"
                />
              ))}
              { feedback[q.id] && (
                <Alert
                  variant={
                    feedback[q.id]==="Correct!" ? "success" : "danger"
                  }
                  className="mt-2 py-1"
                >
                  {feedback[q.id] === "Correct!" ? "✅ Correct!" : "❌ Incorrect"}
                </Alert>
              )}
            </div>
          ))}
  
          <Button type="submit" disabled={!allAnswered}>
            Submit Answers
          </Button>
        </Container>
      </Form>
    );
  }
  
export default HetEx
