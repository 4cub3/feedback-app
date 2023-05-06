import React, { useContext } from "react";
import { FormContext } from "../context/formContext";
import FeedbackForm from "../components/FeedbackComp/FeedbackForm";
import FeedbackStat from "../components/FeedbackComp/FeedbackStat";
import FeedbackList from "../components/FeedbackComp/FeedbackList";
import {AiOutlineQuestion} from 'react-icons/ai';
import { Link } from "react-router-dom";
const Home = () => {
  const ctxForm = useContext(FormContext);
  return (
    <>
      <FeedbackForm handleFeedback={ctxForm.addFeedback} />
      <FeedbackStat feedback={ctxForm.feedback} />
      <FeedbackList feedback={ctxForm.feedback} handleDelete={ctxForm.deleteFeedback} />
      <Link to='/about'>
        <AiOutlineQuestion className="fixed bottom-8 right-6 w-20 h-20"/>
      </Link>
    </>
  );
};

export default Home;
