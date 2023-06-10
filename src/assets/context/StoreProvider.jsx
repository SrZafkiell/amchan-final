import React, { useEffect, useState } from "react";
import { StoreContext } from "./StoreContext";
import { Loader } from "../components/Loader/Loader";

export const StoreProvider = ({ children }) => {
  const endpoint = "https://fakestoreapi.com/";

  const [allProducts, setAllProducts] = useState([]);
  const [allCarts, setAllCarts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCarts, setLoadingCarts] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);

  const getAllProducts = async () => {
    const response = await fetch(endpoint + "products");
    const data = await response.json();
    setAllProducts(data);
    setLoadingProducts(false);
  };

  const getAllCarts = async () => {
    const response = await fetch(endpoint + "carts");
    const data = await response.json();
    setAllCarts(data);
    setLoadingCarts(false);
  };

  const getAllUsers = async () => {
    const response = await fetch(endpoint + "users");
    const data = await response.json();
    setAllUsers(data);
    setLoadingUsers(false);
  };

  useEffect(() => {
    Promise.all([getAllProducts(), getAllCarts(), getAllUsers()])
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <StoreContext.Provider
      value={{
        allProducts,
        allCarts,
        allUsers,
        loadingProducts,
        loadingCarts,
        loadingUsers
      }}
    >
      {(loadingProducts || loadingCarts || loadingUsers) ? (
        <>
            {children}
        </>
      ) : (
        children
      )}
    </StoreContext.Provider>
  );
};