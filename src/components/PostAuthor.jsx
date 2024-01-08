import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/Skull.jpg";

const PostAuthor = () => {
  return (
    <Link to={"/posts/users/mcggr"} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: Andre</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
