import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
// import Feedback from "react-bootstrap/esm/Feedback";
import axios from "axios";

function ExamQuestions({exam , examId}){
    const ExamFile=exam
    const [answers, setAnswers] = useState({});
    const [feedback, setFeedback] = useState({});
    const [score , setScore]=useState(0)                // if i dont want to show score here i can delete it
  
    const handleAnswers = (e) => {
      const name = e.target.name
      const value= e.target.value
      setAnswers((prev) => ({ ...prev, [name]: value} ));
    };
  
    const handleSubmit = async (e) => {
       e.preventDefault();
      let correctCount = 0;
      const result = {};

      ExamFile.forEach((q) => {
        const userAnswer = answers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;

        result[q.id] = isCorrect;
        if (isCorrect) correctCount++;
      });

      const total=(correctCount / ExamFile.length) * 100
      setScore(total);
      setFeedback(result);
      try{
        const res =await axios.post('http://localhost:3500/api/ExamProgress', {examId:examId , score:total} , {withCredentials:true}) 
        console.log(res)
      } catch(err){
        console.log(err)
      }  
    };

    const handleReset = () => {
      setAnswers({});
      setFeedback({});
    };

    const allAnswered = ExamFile.every((q) => answers[q.id]);
    
    return (
      <Form onSubmit={handleSubmit} dir="ltr">
        <Container >
          {ExamFile.map((q, index) => (
            <div key={index} className={"mb-4 p-4 border rounded shadow-sm bg-body-tertiary rounded "}>
              <Form.Label><strong>{index + 1}. {q.text}</strong></Form.Label>
              {q.options.map((opt, i) => (
                <Form.Check
                  key={i}
                  type="radio"
                  name={q.id}
                  label={opt.label}
                  value={opt.value || ''}
                  checked={(answers[q.id] === opt.value) || false}
                  onChange={handleAnswers}
                  className="mb-2"
                />
              ))}
              { feedback[q.id]=== true && (
                <Alert variant="success" className="mt-2 py-1" >
                  ✅ Correct!
                </Alert>
              )}
               { feedback[q.id] === false && (
                <Alert variant="danger" className="mt-2 py-1">
                   "❌ Incorrect"
                </Alert>
              )}
            </div>
          ))}
          <Stack gap={2} className="col-md-2 mx-auto">
            <Button type="submit" disabled={!allAnswered}>
              Submit Answers
            </Button>
            <Button variant="secondary"  disabled={!allAnswered} onClick={handleReset}>
              Reset Answers
            </Button>
          </Stack>
        </Container>
      </Form>
    );
  }
  
export default ExamQuestions