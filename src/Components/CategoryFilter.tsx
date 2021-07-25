import * as React from 'react';

interface CategoryFilterProps {
  categories: Array<string>;
  onChange?: Function;
}

const CategoryFilter = ({
  categories,
  onChange,
}: CategoryFilterProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map((el) => el.value);
    onChange?.(options);
  };
  return (
    <form className="center col s4">
      <div className="input-field">
        <select
          multiple
          className="icons"
          defaultValue={[]}
          onChange={handleChange}
        >
          <option value="" disabled>
            Escolha as categorias
          </option>
          {categories.map((category, index) => {
            return (
              <option
                key={index}
                value={category}
                // data-icon="https://dummyimage.com/64/09f/fff.png"
                className="left"
              >
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default CategoryFilter;
