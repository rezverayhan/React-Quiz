const End = ({ resetGame, score }) => {
  const scoreResult = score;
  let mes;
  if (scoreResult === 1) {
    mes = "Your score 1. Not Good";
  } else if (scoreResult === 2) {
    mes = "Your score 2. Not Good";
  } else if (scoreResult === 3) {
    mes = "Your score 3. Try Again";
  } else if (scoreResult === 4) {
    mes = "Your score 4. Try Again";
  } else if (scoreResult === 5) {
    mes = "Your score 5. Learn More";
  } else if (scoreResult === 6) {
    mes = "Your score 6. Search Internet";
  } else if (scoreResult === 7) {
    mes = "Your score 7. Good Try";
  } else if (scoreResult === 8) {
    mes = "Your score 8. Almost Near";
  } else if (scoreResult === 9) {
    mes = "Your score 9. Awesome";
  } else if (scoreResult === 10) {
    mes = "Congress..! You did it";
  } else if (scoreResult === 0) {
    mes = "Are you Mad! Select Answer";
  }
  return (
    <div className="container-fluid bg-dark ">
      <div className="row vh-100 justify-content-center align-items-center text-center">
        <div className="col-4 text-white">
          <h1>Game Over</h1>
          <h5 className="p-2"> {mes} </h5>

          <button className="btn btn-danger px-5" onClick={resetGame}>
            Reset and Start Again
          </button>
        </div>
      </div>
    </div>
  );
};
export default End;
