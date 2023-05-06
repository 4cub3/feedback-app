import PropTypes from 'prop-types';
function FeedbackStat({ feedback }) {

    //average feedback rating
    let average = (feedback.reduce((acc,cur)=>{ 
        return acc + cur.rating} , 0)/feedback.length).toFixed(1);

  return (
    <div className="feedback-stat">
      <h4>({feedback.length}) Reviews</h4>
      <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
FeedbackStat.propTypes = {
    feedback : PropTypes.array.isRequired
}

export default FeedbackStat;
