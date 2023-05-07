import { useContext  } from "react";
import { FormContext } from "../../context/formContext";
import { FaEdit, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "../../shared/Card";

function FeedbackItem({ item }) {
   const {deleteFeedback, editFeedback} = useContext(FormContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=> deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="absolute top-4 right-20" color="purple" onClick={()=> editFeedback(item)}>
      <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
