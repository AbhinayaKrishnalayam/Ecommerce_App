import React, { useContext, useState, useEffect, createContext } from "react";

export const CartContexts = createContext({
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (id) => {},
  clearCart: () => {},
  increseAmount: (id) => {},
  decreaseAmount: (id) => {},
  itemAmount: 0,
  total: 0,
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);
      setTotal(total);
    }
  }, [cart, total]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContexts.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
        increseAmount: increseAmount,
        decreaseAmount: decreaseAmount,
        itemAmount: itemAmount,
        total: total,
      }}
    >
      {children}
    </CartContexts.Provider>
  );
};

export default CartProvider;
