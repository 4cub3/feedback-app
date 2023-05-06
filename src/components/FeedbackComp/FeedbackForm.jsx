import { useState } from "react";
import Button from "../../shared/Button";
import Card from "../../shared/Card";
import FeedbackRating from "./FeedbackRating";

function FeedbackForm({handleFeedback}) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setDisable] = useState(true);
  const [message, setMessage] = useState("");


  const changeHandler = (e) => {
    if(text === ''){
        setDisable(true)
        setMessage(null)
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
        handleFeedback(newFeedback);
        setText('')
    }
  };

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

export default FeedbackForm;
