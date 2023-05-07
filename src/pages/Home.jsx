import React from "react";
import FeedbackForm from "../components/FeedbackComp/FeedbackForm";
import FeedbackStat from "../components/FeedbackComp/FeedbackStat";
import FeedbackList from "../components/FeedbackComp/FeedbackList";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackStat />
      <FeedbackList />
      <Link to="/about">
        <FaQuestion
          className="fixed bottom-8 right-6 w-20 h-20 hover:text-pink-10 drop-shadow-xl bg-blend-difference"
          size={30}
        />
      </Link>
    </>
  );
};

export default Home;
