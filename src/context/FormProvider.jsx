import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import FeedbackData from "../data/Feedbackdata";
import { FormContext } from "./formContext";

const FormProvider = ({ children }) => {
  const [feedback, setFeeback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeeback((prevExpense) => {
      return [newFeedback, ...prevExpense];
    });
  };
  const deleteFeedback = (id) => {
    setFeeback(feedback.filter((item) => item.id !== id));
  };

  const values = {
    addFeedback,
    feedback,
    deleteFeedback,
  };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export default FormProvider;
