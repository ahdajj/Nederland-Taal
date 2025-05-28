

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

