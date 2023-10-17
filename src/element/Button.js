import React from 'react';
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Button(props) {
  const className = [props.className]

  const onClick = () => {
    if(props.onClick) props.onClick()
  }

  if(props.type === "link") {
    if(props.isExternal){
      return(
        <a href={props.href} className={className.join(" ")} targer={props.target ==="_blank" ? "_blank":undefined} rel={props.target === "_black" ? "noopener noreferrer":undefined}>{props.children}</a>
      );
    } else {
      return (
        <Link to={props.href} className={className.join(" ")} onClick={onClick}>{props.children}</Link>
      );
    }
  }
  return (
    <button className={className.join(" ")} onClick={onClick}>{props.children}</button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isExternal: propTypes.string
}