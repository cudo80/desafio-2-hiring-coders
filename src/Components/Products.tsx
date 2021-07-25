import { Item } from 'data/Classes/Order';

interface ProductsProps {
  onClick?: Function;
  children?: JSX.Element | string;
  href?: string;
  products: Array<Item>;
}

const Products = ({ onClick, products }: ProductsProps): JSX.Element => {
  const handleClick = (index: string, name?: string) => onClick?.(index, name);
  return (
    <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(
        ({ id, name, description, img, quantity, unit_amount }, index) => {
          if (quantity === 0) return null;
          return (
            <div className="col s3" key={index}>
              <div className="card sticky-action">
                <div className="card-image">
                  <img
                    style={{ cursor: 'pointer' }}
                    className="activator"
                    src={img}
                    alt={name}
                  />
                  <a
                    onClick={() => handleClick(id, name)}
                    className="btn-floating halfway-fab waves-effect waves-light"
                  >
                    <i className="material-icons">add_shopping_cart</i>
                  </a>
                </div>
                <div className="card-content">
                  <span
                    style={{ fontSize: '1.5em' }}
                    className="card-title activator grey-text text-darken-4"
                  >
                    {name}
                  </span>
                </div>
                <div className="card-action">
                  <div className="row">
                    <div className="right">{`R$ ${unit_amount}`}</div>
                  </div>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    {name}
                    <i className="material-icons right">close</i>
                  </span>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Products;
