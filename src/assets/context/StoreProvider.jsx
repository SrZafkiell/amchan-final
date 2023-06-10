import { useEffect, useState } from "react";
import { ProductContext } from "./StoreContext";

export const StoreProvider = ({children}) => {
    const [allProducts, setAllProducts] = useState([]);
    const [allCarts, setAllCarts] = useState([]);
    const [allUsers, setAllUsers] = useState([])
};