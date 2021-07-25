import { Item } from 'data/Classes/Order';
import Collection from './Collection';
import Modal from './Modal';

interface CartProps {
  materialIcon?: string;
  order: Array<Item>;
  removeItem: Function;
}

const Cart = ({ materialIcon, order, removeItem}: CartProps): JSX.Element => {
  return (
    <Modal id="cartModal" materialIcon={materialIcon}>
      <div className="row">
        <Collection collection={order} removeItem={removeItem} />
      </div>
    </Modal>
  );
};

export default Cart;
