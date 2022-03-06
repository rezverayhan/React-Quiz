import { useState } from "react";
import End from "./Components/End";
import GameStart from "./Components/GameStart";
import QuestionCard from "./Components/QuestionCard";
import Waiting from "./Components/Waiting";
import Shuffle from "./Shuffle";

const App = () => {
  // Start Games Function
  const [quiz, setQuiz] = useState(null);
  const [game, setGame] = useState(false);
  const [firstQuestion, setFirstQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [endQuestion, setEndQuestion] = useState(false);
  const [userSelectAns, setUserSelectAns] = useState(null);
  const [correctAns, setCorrectAns] = useState(null);
  const [notcorrectAns, setNotCorrectAns] = useState(null);
  const [score, setScore] = useState(0);
  const startGame = async () => {
    setGame(true);
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();
    setQuiz(results);
    setFirstQuestion({
      question: results[0].question,
      answar: Shuffle(results[0]),
    });
    setCorrectAns(results[0].correct_answer);

    setLoading(true);
  };
  const navigation = () => {
    if (quiz.length - 1 === questionIndex) {
      setEndQuestion(true);
    } else {
      const updateIndex = questionIndex + 1;
      setQuestionIndex(updateIndex);
      setFirstQuestion({
        question: quiz[updateIndex].question,
        answar: Shuffle(quiz[updateIndex]),
      });
      setCorrectAns(quiz[updateIndex].correct_answer);
      setUserSelectAns(null);
    }
  };
  const resetGame = () => {
    setQuiz(null);
    setGame(false);
    setFirstQuestion(null);
    setLoading(false);
    setQuestionIndex(0);
    setEndQuestion(false);
    setCorrectAns(null);
    setScore(0);
  };
  const userSelAns = (ans) => {
    setUserSelectAns(ans);
    if (ans === correctAns) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setNotCorrectAns((prev) => prev + 1);
    }
  };
  // console.log(notcorrectAns, score, questionIndex);
  return (
    <div>
      {!game && <GameStart startGame={startGame} />}
      {!loading && <Waiting />}
      {game && loading && !endQuestion && (
        <QuestionCard
          firstQuestion={firstQuestion}
          navigation={navigation}
          userSelAns={userSelAns}
          userSelectAns={userSelectAns}
          correctAns={correctAns}
        />
      )}
      {endQuestion && (
        <End
          resetGame={resetGame}
          score={score}
          notcorrectAns={notcorrectAns}
        />
      )}
    </div>
  );
};
export default App;
