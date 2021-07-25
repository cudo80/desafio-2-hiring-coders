import { Item, Money } from 'data/Classes/Order';
import { useState, useMemo } from 'react';

export const useCart = () => {
  // localStorage.removeItem('cart');
  const [cart, setCart] = useState(() => {
    const storagedArr: Array<{
      id: string;
      name: string;
      unit_amount: { value: number };
      description: string;
      quantity: number;
      img: string;
      category: string;
    }> = JSON.parse(localStorage.getItem('cart') || '[]');

    return storagedArr.map(
      ({
        id,
        name,
        unit_amount: { value } = {},
        description,
        quantity,
        img,
        category,
      }) => {
        const unit_amount = new Money(value as number);
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
      addItem: (item: Item | undefined) => {
        if (item)
          setCart((prev: Array<Item>) => {
            const newCart = [...prev, item];
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
          });
      },
      removeItem: (index: number) => {
        setCart((prev: Array<Item>) => {
          const newCart = prev.filter((_, i) => i !== index);
          localStorage.setItem('cart', JSON.stringify(newCart));
          return newCart;
        });
      },
      changeItemQuantity: (index: number, newQuantity: number) => {
        return null;
      },
    }),
    []
  );

  return [cart, handlers] as const;
};
