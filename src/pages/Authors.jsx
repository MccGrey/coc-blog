import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar1 from "../images/gulp pt man 1.png";
import Avatar2 from "../images/gulp pt wom 1.png";
import Avatar3 from "../images/Gulp Ptrait one 1.png";
import Avatar4 from "../images/TravisScott.png";
import Avatar5 from "../images/trouble.jpg";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Glover Train", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Shelock Holmes", posts: 5 },
  { id: 3, avatar: Avatar3, name: "TMarcus Aurelius", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Don Toliver", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Quincy Jones", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img src={avatar} alt={`image of ${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">NO USERS/AUTHORS FOUND.</h2>
      )}
    </section>
  );
};

export default Authors;
