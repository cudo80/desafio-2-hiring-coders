// import Button from 'Components/Button';

interface CollectionItemProps {
  description: string;
  index: number;
}

const CollectionItem = ({
  description,
  index,
}: CollectionItemProps): JSX.Element => {
  return (
    <li className="collection-item black-text">
      <div className="row">
        <div>
          {description}
          {/* <Button
          classNames="secondary-content"
          materialIcon="edit"
          onClick={(data: string) => console.log(`Edit${index}${data}`)}
        /> */}
        </div>
      </div>
    </li>
  );
};

export default CollectionItem;
