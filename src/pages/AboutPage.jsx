import React from "react";
import Card from "../shared/Card";
import { Link} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const AboutPage = () => {
    
  return (
    <Card>
      <h1>About this Project</h1>
      <p>This is a React App to leave feedback for a product or service</p>
      <p>version 1.0.0</p>
    
      <Link to="/" className=" text-right flex gap-4 items-center justify-end ">
        <BsArrowLeft/>
        click here to go back home
      </Link>
      {/* <Routes>
        <Route path="/about1" element={<h1>hello</h1>}/>
      </Routes> */} {/* this is for nested route*/}
    </Card>
  );
};

export default AboutPage;
