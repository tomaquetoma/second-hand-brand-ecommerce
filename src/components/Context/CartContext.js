import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  // const tomas = "02 de mayo de 1990";

  function addToCart(item) {
    const index = cartList.findIndex((i) => i.id === item.id);

    if (index > -1) {
      const oldQuantity = cartList[index].quantity;

      cartList.splice(index, 1);
      setCartList([
        ...cartList,
        { ...item, quantity: item.quantity + oldQuantity },
      ]);
    } else {
      setCartList([...cartList, item]);
    }
  }

  function emptyCart() {
    setCartList([]);
  }

  console.log(cartList);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
