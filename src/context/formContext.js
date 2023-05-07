import React from "react"

export const FormContext = React.createContext({
    addFeedback: ()=>{},
    deleteFeedback: ()=>{},
    feedback: [],
    editFeedback: ()=>{},
    feedbackEdit:{},
    updateFeedbackItem: ()=>{},
})