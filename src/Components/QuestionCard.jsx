import QuestionCardAns from "./QuestionCardAns";

const QuestionCard = ({
  firstQuestion,
  navigation,
  userSelAns,
  userSelectAns,
  correctAns,
}) => {
  const { question, answar } = firstQuestion;

  return (
    <div className="container">
      <div className="row justify-content-center vh-100 align-items-center">
        <div className="col-6 border p-5 shadow text-center">
          <h4>{question}</h4>
          <ul className="list-group">
            {answar.map((ans, i) => (
              <QuestionCardAns
                ans={ans}
                key={i}
                userSelAns={userSelAns}
                userSelectAns={userSelectAns}
                correctAns={correctAns}
              />
            ))}
          </ul>

          <div className="d-grid mt-3">
            <button className="btn btn-warning" onClick={navigation}>
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
