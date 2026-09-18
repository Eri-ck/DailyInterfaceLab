import { useState, useEffect } from "react";

// Decodifica entidades HTML que vienen en las preguntas (&quot;, &#039;, etc.)
function decodeHtml(text) {
  const el = document.createElement("textarea");
  el.innerHTML = text;
  return el.value;
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function TriviaQuizGame() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [status, setStatus] = useState("loading");

  function loadQuestions() {
    setStatus("loading");
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);

    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load questions");
        return res.json();
      })
      .then((data) => {
        const formatted = data.results.map((q) => ({
          question: decodeHtml(q.question),
          correctAnswer: decodeHtml(q.correct_answer),
          options: shuffle([
            ...q.incorrect_answers.map(decodeHtml),
            decodeHtml(q.correct_answer),
          ]),
        }));
        setQuestions(formatted);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  function selectAnswer(option) {
    if (selectedAnswer) return; // ya respondió esta pregunta
    setSelectedAnswer(option);
    if (option === questions[currentIndex].correctAnswer) {
      setScore((s) => s + 1);
    }
  }

  function nextQuestion() {
    setSelectedAnswer(null);
    setCurrentIndex((i) => i + 1);
  }

  if (status === "loading") {
    return (
      <div style={cardStyle}>
        <p style={{ color: "#999", fontSize: "13px" }}>Loading questions...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div style={cardStyle}>
        <p style={{ color: "#dc2626", fontSize: "13px" }}>
          Couldn't load trivia questions.
        </p>
      </div>
    );
  }

  const isFinished = currentIndex >= questions.length;

  if (isFinished) {
    return (
      <div style={{ ...cardStyle, textAlign: "center" }}>
        <p style={{ margin: "0 0 8px", fontSize: "36px", fontWeight: 700 }}>
          {score}/{questions.length}
        </p>
        <p style={{ margin: "0 0 20px", color: "#666", fontSize: "13px" }}>
          Quiz complete!
        </p>
        <button onClick={loadQuestions} style={primaryBtnStyle}>
          Play again
        </button>
      </div>
    );
  }

  const current = questions[currentIndex];

  return (
    <div style={cardStyle}>
      <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#999" }}>
        Question {currentIndex + 1} of {questions.length} · Score: {score}
      </p>
      <p style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 700 }}>
        {current.question}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        {current.options.map((option) => {
          const isCorrect = option === current.correctAnswer;
          const isSelected = option === selectedAnswer;
          let background = "#f9fafb";
          if (selectedAnswer) {
            if (isCorrect) background = "#dcfce7";
            else if (isSelected) background = "#fee2e2";
          }

          return (
            <button
              key={option}
              onClick={() => selectAnswer(option)}
              style={{
                textAlign: "left",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #eee",
                background,
                fontSize: "13px",
                cursor: selectedAnswer ? "default" : "pointer",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <button onClick={nextQuestion} style={primaryBtnStyle}>
          {currentIndex + 1 < questions.length
            ? "Next question"
            : "See results"}
        </button>
      )}
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5e5e5",
  borderRadius: "24px",
  padding: "24px",
  maxWidth: "420px",
};

const primaryBtnStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  background: "#111",
  color: "#fff",
  fontWeight: 600,
  fontSize: "13px",
  cursor: "pointer",
};
