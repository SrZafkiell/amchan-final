import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { Loader } from "../../Loader/Loader";

import styles from "./ControlPanel.module.css";
import DefaultContent from "./Elements/DefaultContent/DefaultContent";

export const ControlPanel = () => {
  const { allCarts, loadingCarts, allProducts, loadingProducts } = useContext(StoreContext);
  const [showControlPanelDefault, setShowControlPanelDefault] = useState(true);
  const [showAccountManagement, setShowAccountManagement] = useState(false);
  const [showProductManagement, setShowProductManagement] = useState(false);
  const [showCarts, setShowCarts] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  const handleShowCarts = () => {
    setShowCarts(true);
    setShowControlPanelDefault(false);
    setShowTest(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  };

  const handleShowTest = () => {
    setShowTest(true);
    setShowControlPanelDefault(false);
    setShowCarts(false);
    setShowAccountManagement(false);
    setShowProductManagement(false);
  };

  const handleShowAccountManagement = () => {
    setShowTest(false);
    setShowControlPanelDefault(false);
    setShowCarts(false);
    setShowAccountManagement(true);
    setShowProductManagement(false);
  }

  const handleShowProductsManagement = () => {
    setShowTest(false);
    setShowControlPanelDefault(false);
    setShowCarts(false);
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
          <button className={styles.controlPanelSubButton} onClick={handleShowCarts}>Sales Analytics</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowTest}>Most buyed</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowTest}>Test</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowAccountManagement}>Edit Accounts</button>
          <button className={styles.controlPanelSubButton} onClick={handleShowProductsManagement}>Edit Products</button>
          {/* <button className={styles.controlPanelSubButton} onClick={handleShowTest}></button> */}
        </div>
        <div className={styles.controlPanelContent}>
          <div className={styles.loaderWrapper} style={{ display: loadingCarts || loadingProducts ? "block" : "none" }}>
            <Loader />
          </div>
          {loadingFinished && showControlPanelDefault && (
            <>
              <DefaultContent />
            </>
          )}
          {showCarts && (
            <>
              <div className={styles.cartsContainer} style={{ display: loadingCarts ? "none" : "block" }}>
                {allCarts.map((cart) => (
                  <div key={cart.id}>
                    <h3>Cart ID: {cart.id}</h3>
                    <ul>
                      {Object.keys(cart).map((key) => (
                        <li key={key}>
                          {key}: {JSON.stringify(cart[key])}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
          {showTest && (
            <>
              <div className={styles.productsContainer} style={{ display: loadingProducts ? "none" : "block" }}>
                {allProducts.map((product) => (
                  <div key={product.id}>
                    <h3>Product ID: {product.id}</h3>
                    <ul>
                      {Object.keys(product).map((key) => (
                        <li key={key}>
                          {key}: {JSON.stringify(product[key])}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
          {showAccountManagement && (
            <>
              <h1>Account Management</h1>
              <h2>Under construction</h2>
            </>
          )}
          {showProductManagement && (
            <>
              <h1>Products Management</h1>
              <h2>Under construction</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};
