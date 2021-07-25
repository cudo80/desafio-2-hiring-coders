import * as React from 'react';
import M from 'materialize-css';

import Main from 'Components/Main';
import AppBody from 'Components/AppBody';
import Header from 'Components/Header';
import CategoryFilter from 'Components/CategoryFilter';
import Footer from 'Components/Footer';
import { useData } from 'data/useData';
import Products from 'Components/Products';
import { Link } from 'react-router-dom';
import { Item } from 'data/Classes/Order';

import { useCart } from 'Hooks/useCart';

const Home = () => {
  const [
    _,
    products,
    { getFilteredProducts, getProductsCategories },
  ] = useData();
  const [cart, { addItem, removeItem }] = useCart();

  const [categoriesFilter, setCategoriesFilter] = React.useState([]);

  const handleAddToCart = (id: string, name: string) => {
    const addedProduct = products.find((item: Item) => item.id === id);

    addItem(addedProduct);
    M.toast({
      html: name ? `${name} added to cart` : `New item added to cart`,
    });
  };
  React.useEffect(() => M.AutoInit(), []);
  return (
    <AppBody>
      <Header order={cart} removeItem={removeItem}>
        <Link to="/" className="brand-logo">
          <i className="material-icons"></i>Desafio #2 | Hiring Coders
        </Link>
      </Header>
      <Main>
        <div className="row">
          <h4 className="center">Itens disponiveis:</h4>
          <CategoryFilter
            categories={getProductsCategories()}
            onChange={setCategoriesFilter}
          />
        </div>
        <Products
          products={getFilteredProducts(categoriesFilter)}
          onClick={handleAddToCart}
        />
      </Main>
      <Footer title="">
      </Footer>
    </AppBody>
  );
};

export default Home;
