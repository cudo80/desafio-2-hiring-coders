import CollectionItem from 'Components/CollectionItem';
import { Item } from 'data/Classes/Order';
import CartCollection from './CartCollection';

interface CollectionProps {
  collection: Array<{ description: string }>;
  removeItem?: Function;
}

const Collection = ({
  collection,
  removeItem,
}: CollectionProps): JSX.Element => (
  <ul className="collection">
    {collection.map((item, index) => {
      const type = typeof item.description;
      return (
        <div key={index}>
          {type === 'object' ? (
            <CollectionItem description={item.description} index={index} />
          ) : (
            <>
              {removeItem && (
                <CartCollection
                  item={item as Item}
                  index={index}
                  removeItem={removeItem as Function}
                />
              )}
            </>
          )}
        </div>
      );
    })}
  </ul>
);

export default Collection;
