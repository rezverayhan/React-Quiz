/* eslint-disable jsx-a11y/anchor-is-valid */
const QuestionCardAns = ({ ans, userSelAns, userSelectAns, correctAns }) => {
  const isRight = userSelectAns && ans === correctAns;
  const isWring = userSelectAns && ans !== correctAns;
  const correctClass = isRight && "bg-success text-white border py-3";
  const wrongClass = isWring && "bg-danger text-dark";
  const disableClass = userSelectAns && "disabled";
  return (
    <a href="#" className="text-decoration-none">
      <li
        onClick={() => userSelAns(ans)}
        className={`list-group-item d-flex justify-content-between align-items-center my-2 ${correctClass} ${wrongClass} ${disableClass} `}
      >
        {ans}
      </li>
    </a>
  );
};
export default QuestionCardAns;
