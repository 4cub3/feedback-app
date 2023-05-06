import React from "react";
import Card from "../shared/Card";
import { Link} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
// import { FaArrowAltCircleLeft } from "react-icons/fa";
const AboutPage = () => {
    
  return (
    <Card>
      <h1>About this Project</h1>
      <p>This is a React App to leave feedback for a product or service</p>
      <p>version 1.0.0</p>
    
      <Link to="/" className=" text-right flex gap-4 items-center justify-end">
        <BsArrowLeft/>
        {/* <FaArrowAltCircleLeft /> */}
        click here to go back home
      </Link>
    </Card>
  );
};

export default AboutPage;
