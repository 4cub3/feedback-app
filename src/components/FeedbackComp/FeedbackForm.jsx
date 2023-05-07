import React, { useState,useContext, useEffect  } from "react";
import { FormContext } from "../../context/formContext";
import Button from "../../shared/Button";
import Card from "../../shared/Card";
import FeedbackRating from "./FeedbackRating";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setDisable] = useState(true);
  const [message, setMessage] = useState("");
  const {addFeedback, feedbackEdit, updateFeedbackItem} = useContext(FormContext)
  
  const changeHandler = (e) => {
    if(text === ''){
      setDisable(true)
      setMessage('Review must be atleast 10 characters long')
    }
    else  if(text !== '' && text.trim().length <=10){
      setDisable(true)
      setMessage('Review must be atleast 10 characters long')
    }
    else{
      setDisable(false)
      setMessage(null);
    }
    
    setText(e.target.value);
  };
  
  
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(text.trim().length>10){
      const newFeedback = {
        text: text,
        rating: rating,
      }
      if(feedbackEdit.edit === true){
        updateFeedbackItem(feedbackEdit.item.id, newFeedback)
      }else{
        addFeedback(newFeedback);
      }
      setText('')
    }
  };
  
    useEffect(()=>{
      if(feedbackEdit.edit === true){
        setDisable(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])

  return (
    <Card>
      <form onSubmit={submitHandler} >
        <h2>How would you rate our service?</h2>
        <FeedbackRating select ={(rating)=> setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={changeHandler}
          />
          <Button type ='submit' isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message"> {message} </div>}
      </form>
    </Card>
  );
}

export default React.memo(FeedbackForm);
