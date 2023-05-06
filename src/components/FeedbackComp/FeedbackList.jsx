import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p style={{ textAlign: "center" }}>No Feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ transform: 'translateX(-100%)', opacity: 0, position: 'absolute'  }}
          >
            <FeedbackItem
              key={item.id} 
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  //without animation
    // return (
    //   <div className="feedback-list">
    //       {
    //           feedback.map((item)=>(
    //               <FeedbackItem  key ={item.id} item = {item} handleDelete ={handleDelete}/>
    //           ))
    //       }
    //       </div>
    // )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackList;
