

const person = {
    name: 'John Doe',
    age: 30,
}

const person2={
    name:'aaa',
    age:33
}

const person3={}
person3['ss']=person.name

console.log(person3)

for (let i in person){
    console.log(person[i])
}



const arr=[1,2,3,-2,5]
const x=arr.every((i)=> i>0)
console.log(x)
const questions = [
    {
      id: "q1",
      text: "What's the capital of France?",
      options: [
        { label: "Paris", value: "✅ Correct!" },
        { label: "London", value: "❌ Incorrect" },
        { label: "Rome", value: "❌ Incorrect" },
      ],
    },
    {
      id: "q2",
      text: "What is 2 + 2?",
      options: [
        { label: "3", value: "❌ Incorrect" },
        { label: "4", value:"✅ Correct!"},
        { label: "5", value: "❌ Incorrect" },
      ],
    },
  ];
const answers={q1:'✅ Correct!',q2:'✅ Correct!'}
  const allAnswered = questions.every((q) => answers[q.id]);
  console.log(allAnswered)











/////////////////////////////////////////////////
user = {
  id:1,
  FullName:,
  Email:,
  Password,
  Lessons:{lesso1:[part1,part2] , lsson2:[]}
  Exams:{Exam1:{attempt: , score} , Exam1:{attempt: , score}}
}
// user last online , updating me Authentication
app.get("/api/me", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({});

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  await User.updateOne(
    { id: decoded.id },
    { lastOnline: new Date().toISOString() }
  );

  res.json({ email: decoded.email, id: decoded.id });
});