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
import MostSelled from "./Elements/Analytics/MostSelled/MostSelled";

export const ControlPanel = () => {
  const { allCarts, loadingCarts, allProducts, loadingProducts } = useContext(StoreContext);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [showControlPanelDefault, setShowControlPanelDefault] = useState(true);
  const [showTotalProducts, setShowTotalProducts] = useState(false);
  const [showTotalOrders, setShowTotalOrders] = useState(false);
  const [showTotalEarnings, setShowTotalEarnings] = useState(false);
  const [showAveragePrice, setShowAveragePrice] = useState(false);
  const [showMostSelled, setShowMostSelled] = useState(false);
  const [showAccountManagement, setShowAccountManagement] = useState(false);
  const [showProductManagement, setShowProductManagement] = useState(false);

  const handleShowTotalProducts = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(true);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSelled(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowTotalOrders = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(true);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSelled(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowTotalEarnings = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(true);
    setShowAveragePrice(false);
    setShowMostSelled(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowAveragePrice = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(true);
    setShowMostSelled(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowMostSelled = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSelled(true);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  }
  const handleShowAccountManagement = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSelled(false);
    setShowAccountManagement(true);
    setShowProductManagement(false);
  }
  const handleShowProductManagement = () => {
    setShowControlPanelDefault(false);
    setShowTotalProducts(false);
    setShowTotalOrders(false);
    setShowTotalEarnings(false);
    setShowAveragePrice(false);
    setShowMostSelled(false);
    setShowAccountManagement(false);
    setShowProductManagement(true);
  }

  useEffect(() => {
    if (!loadingCarts && !loadingProducts) {
      // Loading is finished, show default content
      setLoadingFinished(true);
    }
  }, [loadingCarts, loadingProducts]);

  return (
    <>
      <div className={styles.controlPanelMain}>
        <div className={styles.controlPanelMenu}>
          <h4 className={fonts.subTitleFont}>Analytics</h4>
          <button className={styles.controlPanelSubButton} onClick={handleShowTotalProducts}>Total Products</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowTotalOrders}>Total Orders</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowTotalEarnings}>Total Earnings</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowAveragePrice}>Average Price</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowMostSelled}>Most Selled</button>
          <h4 className={fonts.subTitleFont}>Management</h4>
          <button className={styles.controlPanelSubButton} onClick={handleShowAccountManagement}>Edit Accounts</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowProductManagement}>Edit Products</button>
          {/* <button className={styles.controlPanelSubButton} onClick={handleShowTest}></button> */}
        </div>
        <div className={styles.controlPanelContent}>
          <div className={styles.loaderWrapper} style={{ display: loadingCarts || loadingProducts ? "block" : "none" }}>
            <Loader />
          </div>
          {loadingFinished && showControlPanelDefault && (
            <DefaultContent />
          )}
          {showTotalProducts && (
            <div className={styles.cartsContainer} style={{ display: loadingCarts ? "none" : "block" }}>
              <TotalProducts allProductsObject={allProducts} />
              {/* Deleted code https://prnt.sc/wjJrxqWJV824 */}
            </div>
          )}
          {showTotalOrders && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <TotalOrders allCartsObject={allCarts} />
            </div>
          )}
          {showTotalEarnings && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <TotalEarnings allCartsObject={allCarts} />
            </div>
          )}
          {showAveragePrice && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <AveragePrice allProductsObject={allProducts} />
            </div>
          )}
          {showMostSelled && (
            <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
              <MostSelled allCartsObject={allCarts} allProductsObject={allProducts} />
            </div>
          )}
          {showAccountManagement && (
            <div className={styles.cartsContainer} style={{ display: loadingCarts ? "none" : "block" }}>
              <h1>Account Management</h1>
              <h2>Under construction</h2>
            </div>
          )}
          {showProductManagement && (
            <div className={styles.cartsContainer} style={{ display: loadingCarts ? "none" : "block" }}>
              <h1>Products Management</h1>
              <h2>Under construction</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
