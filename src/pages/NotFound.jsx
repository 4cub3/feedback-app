import React from "react";
import Card from "../shared/Card";
import { FaOsi } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Card>
      <article className="text-center flex flex-col items-center justify-center gap-8">
        <FaOsi className="text-[12rem] text-pink-10" />
        <h1 className=" text-[5rem] font-[600] text-slate-10"> ERROR 404 </h1>
        <p className="uppercase">The page you are looking for does not exist</p>
        
        <Link
          to="/"
          className="px-4 py-2 bg-pink-10 rounded-lg hover:bg-slate-10 text-white transition-colors duration-200"
        >
        Go back to HomePage
        </Link>
      </article>
    </Card>
  );
};

export default NotFound;
