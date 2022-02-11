import React, { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => setQuestions(data));
  }, []);

  const questionsToDisplay = questions.map((question) => (
    <QuestionItem 
      key={question.id} 
      question={question} 
      onDeleteQuestion={handleDeletionQuestion}
    />
  ))

  function handleDeletionQuestion(deletedQ) {
    const updatedQuestion =  questions.filter((question) => question.id !== deletedQ.id)
    setQuestions(updatedQuestion)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
