import { useContext } from "react";
import { FormContext } from "../../context/formContext";
function FeedbackStat() {
  const { feedback } = useContext(FormContext);
  //average feedback rating
  let average = (
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length
  ).toFixed(1);

  return (
    <div className="feedback-stat">
      <h4>({feedback.length}) Reviews</h4>
      <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStat;
