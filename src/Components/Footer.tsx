import * as React from 'react';
import { JsxElement } from 'typescript';
import { Link } from 'react-router-dom';

const Footer = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: JsxElement | string;
}): JSX.Element => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s8">
            <h5 className="white-text">{title}</h5>
            <p className="grey-text text-lighten-4">{children}</p>
          </div>
          <div className="col l4 offset-l2 s4">
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <p className="grey-text text-lighten-4 center">
            © 2021 {title} Hiring Coders VTEX.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
