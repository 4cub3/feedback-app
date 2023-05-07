import { motion, AnimatePresence } from "framer-motion";
import { useContext  } from "react";
import { FormContext } from "../../context/formContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {

  const {feedback} = useContext(FormContext)

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
              item={item}
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


export default FeedbackList;
