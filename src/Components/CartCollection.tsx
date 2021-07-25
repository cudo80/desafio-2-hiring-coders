import Button from 'Components/Button';
import { Item } from 'data/Classes/Order';

interface CartCollectionProps {
  item: Item;
  index: number;
  removeItem: Function;
}

const CartCollection = ({
  item,
  index,
  removeItem,
}: CartCollectionProps): JSX.Element => {
  return (
    <li className="collection-item black-text col s12">
      <div className="card horizontal">
        <div className="card-image">
          <img src={item.img} height="100px" alt={item.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content col s12 valign-wrapper">
            <div className="col s5 ">
              <span>{item.name}</span>
            </div>
            <div className="col s3 ">{item.unit_amount.getValue()}</div>
            <div className="col s2 ">{item.quantity}</div>
            <div className="col s2">
              <Button
                classNames="small btn-floating waves-effect waves-light"
                materialIcon="delete"
                onClick={(data: string) => removeItem(index)}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartCollection;
