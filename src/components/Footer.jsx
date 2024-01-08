import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/sermon">Sermon</Link>
        </li>
        <li>
          <Link to="/posts/categories/teens">Teens</Link>
        </li>
        <li>
          <Link to="/posts/categories/doctrinal">Doctrinal Teachings</Link>
        </li>
        <li>
          <Link to="/posts/categories/kids">Kids</Link>
        </li>
        <li>
          <Link to="/posts/categories/videos">Videos</Link>
        </li>
        <li>
          <Link to="/posts/categories/Family">
            Family, Society and Marriage
          </Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy: Copyright, MccGrey.</small>
      </div>
    </footer>
  );
};

export default Footer;
