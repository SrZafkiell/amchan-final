import React, { useEffect, useState } from "react";
import { StoreContext } from "./StoreContext";
import { Loader } from "../components/Loader/Loader";

export const StoreProvider = ({ children }) => {
  const endpoint = "https://fakestoreapi.com/";

  const [allProducts, setAllProducts] = useState([]);
  const [allCarts, setAllCarts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [fetchedProducts, setFetchedProducts] = useState(false);
  const [loadingCarts, setLoadingCarts] = useState(true);
  const [fetchedCarts, setFetchedCarts] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [fetchedUsers, setFetchedUsers] = useState(false);

  const getAllProducts = async () => {
    const response = await fetch(endpoint + "products");
    const data = await response.json();
    setAllProducts(data);
    setLoadingProducts(false);
    setFetchedProducts(true);
  };

  const getAllCarts = async () => {
    const response = await fetch(endpoint + "carts");
    const data = await response.json();
    setAllCarts(data);
    setLoadingCarts(false);
    setFetchedCarts(true);
  };

  const getAllUsers = async () => {
    const response = await fetch(endpoint + "users");
    const data = await response.json();
    setAllUsers(data);
    setLoadingUsers(false);
    setFetchedUsers(true);
  };

  useEffect(() => {
    Promise.all([getAllProducts(), getAllCarts(), getAllUsers()])
      .catch((error) => console.error("Error fetching data:", error));
      setLoadingProducts(false);
      setLoadingCarts(false);
      setLoadingUsers(false);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        allProducts,
        allCarts,
        allUsers,
        loadingProducts,
        loadingCarts,
        loadingUsers,
        fetchedProducts,
        fetchedCarts,
        fetchedUsers
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