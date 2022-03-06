const GameStart = ({ startGame }) => {
  return (
    <div className="container-fluid bg-dark ">
      <div className="row vh-100 justify-content-center align-items-center text-center">
        <div className="col-4 text-white">
          <h1>Quiz Start</h1>
          <button className="btn btn-danger px-5" onClick={startGame}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};
export default GameStart;
