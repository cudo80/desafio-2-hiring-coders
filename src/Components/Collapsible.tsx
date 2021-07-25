import * as React from 'react';

interface CollapsibleProps {
  children?: JSX.Element;
  materialIcon?: string;
  headerText?: string;
  badge?: string | number;
}

const Collapsible = ({
  children,
  materialIcon,
  headerText,
  badge,
}: CollapsibleProps): JSX.Element => (
  <div>
    <ul className="collapsible">
      <li>
        <div className="collapsible-header">
          {materialIcon && <i className="material-icons">{materialIcon}</i>}
          {headerText}
          {badge && <span className="badge">{badge}</span>}
        </div>
        <div className="collapsible-body">{children}</div>
      </li>
    </ul>
  </div>
);

export default Collapsible;
