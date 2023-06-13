import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { Loader } from "../../Loader/Loader";

import fonts from '/src/assets/fonts/GlobalFonts.module.css'
import styles from "./ControlPanel.module.css";
import DefaultContent from "./Elements/DefaultContent/DefaultContent";
import TotalProducts from "./Elements/Analytics/TotalProducts/TotalProducts";
import TotalOrders from "./Elements/Analytics/TotalOrders/TotalOrders";
import TotalEarnings from "./Elements/Analytics/TotalEarnings/TotalEarnings";
import AveragePrice from "./Elements/Analytics/AveragePrice/AveragePrice";
import MostSold from "./Elements/Analytics/MostSold/MostSold";
import AccountManagement from './Elements/Management/Account/AccountManagement';
import ProductManagement from "./Elements/Management/Product/ProductManagement";

export const ControlPanel = () => {
  const { allCarts, loadingCarts, allProducts, loadingProducts, allUsers, loadingUsers, fetchedProducts, fetchedCarts, fetchedUsers } = useContext(StoreContext);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [showControlPanelDefault, setShowControlPanelDefault] = useState(true);
  const [showTotalProducts, setShowTotalProducts] = useState(false);
  const [showTotalOrders, setShowTotalOrders] = useState(false);
  const [showTotalEarnings, setShowTotalEarnings] = useState(false);
  const [showAveragePrice, setShowAveragePrice] = useState(false);
  const [showMostSold, setShowMostSold] = useState(false);
  const [showAccountManagement, setShowAccountManagement] = useState(false);
  const [showProductManagement, setShowProductManagement] = useState(false);

  const handleShowTotalProducts = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(true);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSold(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowTotalOrders = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(true);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSold(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowTotalEarnings = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(true);
    setShowAveragePrice(false);
    setShowMostSold(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowAveragePrice = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(true);
    setShowMostSold(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowMostSold = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSold(true);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowAccountManagement = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSold(false);
    setShowAccountManagement(true);
    setShowProductManagement(false);
  }
  const handleShowProductManagement = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSold(false);
    setShowAccountManagement(false);
    setShowProductManagement(true);
  }

  // useEffect(() => {
  //   if (!loadingCarts && !loadingProducts && !loadingUsers) {
  //     // Loading is finished, show default content
  //     setLoadingFinished(true);
  //   }
  // }, [loadingCarts, loadingProducts, loadingUsers]);

  // Testing delay
  useEffect(() => {
    if (!loadingCarts && !loadingProducts && !loadingUsers) {
      // Simulate a longer loading time for testing purposes
      setTimeout(() => {
        setLoadingFinished(true);
      }, 1000); // Delay in milliseconds
    }
  }, [loadingCarts, loadingProducts, loadingUsers]);
  

  return (
    <>
      <div className={styles.controlPanelMain}>
        <div className={styles.controlPanelMenu}>
          <div className={styles.controlPanelMenuSectionTitle}>
            <h4 className={fonts.linkFont}>Analytics</h4>
          </div>
          <button className={styles.controlPanelSubButton} onClick={handleShowTotalProducts}>Total Products</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowTotalOrders}>Total Orders</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowTotalEarnings}>Total Earnings</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowAveragePrice}>Average Price</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowMostSold}>Most Sold</button>
          <div className={styles.controlPanelMenuSectionTitle}>
            <h4 className={fonts.linkFont}>Management</h4>
          </div>
          <button className={styles.controlPanelSubButton} onClick={handleShowAccountManagement}>Edit Accounts</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowProductManagement}>Edit Products</button>
          {/* <button className={styles.controlPanelSubButton} onClick={handleShowTest}></button> */}
        </div>
        <div className={styles.controlPanelContentBox}>
          <div className={styles.loaderWrapper} style={{ display: !loadingFinished ? "block" : "none" }}>
            <Loader />
          </div>
          {loadingFinished && showControlPanelDefault && (
            <DefaultContent productsFetchStatus={fetchedProducts} cartsFetchStatus={fetchedCarts} usersFetchStatus={fetchedUsers}/>
          )}
          {showTotalProducts && (
            <div className={styles.cartsContainer} style={{ display: loadingCarts ? "none" : "block" }}>
              <TotalProducts allProductsObject={allProducts} />
            </div>
          )}
          {showTotalOrders && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <TotalOrders allCartsObject={allCarts} />
            </div>
          )}
          {showTotalEarnings && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <TotalEarnings allCartsObject={allCarts} allProductsObject={allProducts} />
            </div>
          )}
          {showAveragePrice && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <AveragePrice allProductsObject={allProducts}  />
            </div>
          )}
          {showMostSold && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <MostSold allCartsObject={allCarts} allProductsObject={allProducts} />
            </div>
          )}
          {showAccountManagement && (
            <div className={styles.cartsContainer} style={{ display: loadingCarts ? "none" : "block" }}>
              <AccountManagement />
            </div>
          )}
          {showProductManagement && (
            <div className={styles.cartsContainer} style={{ display: loadingCarts ? "none" : "block" }}>
              <ProductManagement />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
