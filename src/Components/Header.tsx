import * as React from 'react';
import Button from 'Components/Button';
import { useHistory } from 'react-router-dom';
import Cart from './Cart';
import { Item } from 'data/Classes/Order';

const Header = ({
  children,
  order,
  removeItem,
}: {
  children?: React.ReactNode;
  order?: Array<Item>;
  removeItem?: Function;
}): JSX.Element => {
  const history = useHistory();
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <div style={{ paddingLeft: '5vw' }}>{children}</div>
          <ul className="right">
            <li>
              <Button onClick={() => history.push('/')} materialIcon="home" />
            </li>
            {order && removeItem ? (
              <li>
                <Cart
                  materialIcon="shopping_cart"
                  order={order}
                  removeItem={removeItem}
                />
              </li>
            ) : null}
            <li>
              <Button
                onClick={() => history.push('/clients')}
                materialIcon="person"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
