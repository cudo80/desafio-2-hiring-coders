import * as React from 'react';

interface ButtonProps {
  materialIcon?: string;
  classNames?: string;
  onClick?: Function;
  children?: JSX.Element | string;
  href?: string;
}

const Button = ({
  classNames,
  materialIcon,
  onClick,
  children,
  href,
}: ButtonProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
  };
  return (
    <a href={href || '/'} className={classNames} onClick={handleClick}>
      {children}
      {materialIcon && <i className="material-icons right">{materialIcon}</i>}
    </a>
  );
};

export default Button;
