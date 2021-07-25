import { clients as dataClients } from 'data/clients';
import { products as dataProducts } from 'data/products';
import { Item, Money, Client } from 'data/Classes/Order';
import { v4 as uuidv4 } from 'uuid';
import { useState, useMemo } from 'react';

export const useData = () => {
  if (!localStorage.getItem('clients')) {
    localStorage.setItem('clients', JSON.stringify(dataClients));
  }
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(dataProducts));
  }
  // initialize clients and products
  const [clients, setClients] = useState(
    JSON.parse(localStorage.getItem('clients') || '[]')
  );
  const [products, setProducts] = useState(() => {
    const storagedArr: Array<{
      id: string;
      name: string;
      unit_amount: number;
      description: string;
      quantity: number;
      img: string;
      category: string;
    }> = JSON.parse(localStorage.getItem('products') || '[]');
    return storagedArr.map(
      ({
        id,
        name,
        unit_amount: unit_number,
        description,
        quantity,
        img,
        category,
      }) => {
        const unit_amount = new Money(unit_number);
        return new Item({
          id,
          name,
          unit_amount: unit_amount,
          description,
          quantity,
          img,
          category,
        });
      }
    );
  });

  const handlers = useMemo(
    () => ({
      getProductsCategories: (): Array<string> => {
        const categories = products
          .map((product: Item): string => product.category)
          .filter((value: string, index: number, self: Array<string>) => {
            return self.indexOf(value) === index;
          });

        return categories;
      },
      getFilteredProducts: (filter: Array<string>) => {
        const products = JSON.parse(localStorage.getItem('products') || '');
        const filteredProducts = products.filter((product: Item) => {
          return filter.some((filter) => filter === product.category);
        });
        return filteredProducts;
      },
      putNewClient: (client: Client) => {
        const clients = JSON.parse(localStorage.getItem('clients') || '');
        const newClient = { ...client, id: uuidv4() };
        clients.push(newClient);
        localStorage.setItem('clients', JSON.stringify(clients));
        setClients(clients);
      },
    }),
    []
  );

  return [clients, products, handlers] as const;
};
