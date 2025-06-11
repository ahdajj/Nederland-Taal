import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from "react-bootstrap";
import question1 from './lesonComponent/Exam1'
import question2 from './lesonComponent/Exam2'
import question3 from './lesonComponent/Exam3'


const Examjs={
   Exam1:question1,
   Exam2:question2,
   Exam3:question3
}

function HetEx({exam}){
    const [answers, setAnswers] = useState({});
    const [feedback, setFeedback] = useState({});
    const ExamFile=Examjs[exam]
    
  
    const handleAnswers = (e) => {
      const name = e.target.name
      const value= e.target.value
      setAnswers((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = {};
      ExamFile.forEach((q) => {
        result[q.id] = answers[q.id ]
      });
      setFeedback(result);
    };
  
    const allAnswered = ExamFile.every((q) => answers[q.id]);
  
    return (
      <Form onSubmit={handleSubmit}>
        <Container className="py-4">
          {ExamFile.map((q, index) => (
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


// const questions = [
    //   {
    //     id: "q1",
    //     text: "What's the capital of France?",
    //     options: [
    //       { label: "Paris", value: "Correct!" },
    //       { label: "London", value: "Incorrect" },
    //       { label: "Rome", value: "Incorrect" },
    //     ],
    //   },
    //   {
    //     id: "q2",
    //     text: "What is 2 + 2?",
    //     options: [
    //       { label: "3", value: " Incorrect" },
    //       { label: "4", value:"Correct!"},
    //       { label: "5", value: "Incorrect" },
    //     ],
    //   },
    // ];