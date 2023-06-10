import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../context/StoreContext";
import { Loader } from "../../Loader/Loader";

import styles from "./ControlPanel.module.css";

export const ControlPanel = () => {
  const { allCarts, loadingCarts } = useContext(StoreContext);
  const [showControlPanelDefault, setShowControlPanelDefault] = useState(true);
  const [showCarts, setShowCarts] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  const handleShowCarts = () => {
    setShowCarts(true);
    setShowControlPanelDefault(false);
    setShowTest(false);
  };

  const handleShowTest = () => {
    setShowTest(true);
    setShowControlPanelDefault(false);
    setShowCarts(false);
  };

  useEffect(() => {
    if (!loadingCarts) {
      // Loading is finished, show default content
      setLoadingFinished(true);
    }
  }, [loadingCarts]);

  return (
    <>
      <div className={styles.controlPanelMain}>
        <div className={styles.controlPanelMenu}>
          <button onClick={handleShowCarts}>Show Carts</button>
          <button onClick={handleShowTest}>Show Test</button>
        </div>
        <div className={styles.controlPanelContent}>
          <div className={styles.loaderWrapper} style={{ display: loadingCarts ? "block" : "none" }}>
            <Loader />
          </div>
          {loadingFinished && showControlPanelDefault && (
            <>
              <h1>Default content</h1>
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
              <h1>Test</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};
