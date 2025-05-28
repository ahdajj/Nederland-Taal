
function HetEx(){
    const [answers , Setanswers] = useState({})
    const Handleanswers=(e)=>{
        const name = e.target.name
        const value = e.target.value
        Setanswers((prev)=>{ return {...prev, [name]:value}})
        console.log(answers)
     }
     const Handlesubmit=(e)=>{
        e.preventDefault()
           setStatus(answers.q1)
     }
    return(
                     //    with no form submit   //
        <div>
            <Container className="d-flex align-items-center justify-content-around">
                <div className="d-flex flex-column mb-3">

                    <label>Please Select an answer:</label>

                    <div className="mb-1">
                        <label>
                        <input type="radio" name="q1" value="Correct" onChange={Handleanswers}/>{" "}
                        First answer
                        </label>
                    </div>

                    <div className="mb-2">
                        <label>
                        <input type="radio" name="q1" value="Incorrect" onChange={Handleanswers}/>{" "}
                        Second answer
                        </label>
                    </div>

                    <div className="mb-2">
                        <label>
                        <input type="radio" name="q1" value="Incorrect" onChange={Handleanswers}/>{" "}
                        Third answer
                        </label>
                    </div>
                </div>

                <p><strong>{answers.q1}</strong></p>            
            </Container>
        
                        {/* with form submit */}
            <form onSubmit={(e)=>{Handlesubmit(e)}}>
                <Container className="d-flex align-items-center justify-content-around">
                    <div className="d-flex flex-column mb-2">
                    <label>Please Select an answer:</label>

                    <div className="mb-1">
                        <label>
                        <input type="radio" name="q1" value="Correct" onChange={Handleanswers}/>{" "}
                        First answer
                        </label>
                    </div>

                    <div className="mb-2">
                        <label>
                        <input type="radio" name="q1" value="Incorrect" onChange={Handleanswers}/>{" "}
                        Second answer
                        </label>
                    </div>

                    <div className="mb-2">
                        <label>
                        <input type="radio" name="q1" value="Incorrect" onChange={Handleanswers}/>{" "}
                        Third answer
                        </label>
                    </div>
                    </div>

                    <p><strong>{status}</strong></p>

                    <button type="submit" disabled={!answers.q1}>Submit</button>
                </Container>
            </form>
                          {/* with bootstrab */}
            <Form onSubmit={Handlesubmit}>
                <Container className="d-flex align-items-center justify-content-around py-4">
                    <div className="d-flex flex-column mb-3">
                    <Form.Label className="mb-3"><strong>Please Select an Answer:</strong></Form.Label>

                    <Form.Check
                        type="radio"
                        name="q1"
                        label="First answer"
                        value="Correct"
                        onChange={Handleanswers}
                        className="mb-2"
                    />

                    <Form.Check
                        type="radio"
                        name="q1"
                        label="Second answer"
                        value="Incorrect"
                        onChange={Handleanswers}
                        className="mb-2"
                    />

                    <Form.Check
                        type="radio"
                        name="q1"
                        label="Third answer"
                        value="Incorrect"
                        onChange={Handleanswers}
                        className="mb-2"
                    />
                    </div>

                    <div className="text-center">
                    <p><strong>{status}</strong></p>
                    <Button type="submit" disabled={!answers.q1} variant="primary">
                        Submit
                    </Button>
                    </div>
                </Container>
            </Form>
        </div>
    )
}

// Completed version : with form submit , bootstrab
    // getting questions from an array 
    // using two states answers and feedback
    // answers is handeld on change and feedback on submit 
    // additional variable allanswers which is the result of array.every to disable/enable the button
    // disblay the feedback value after each question 

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