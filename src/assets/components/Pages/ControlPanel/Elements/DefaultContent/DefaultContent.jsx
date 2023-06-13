import React from "react";
import fonts from '/src/assets/fonts/GlobalFonts.module.css'
import styles from './DefaultContent.module.css'

function DefaultContent(props) {
    return (
        <div className={styles.defaultContentBox}>
            <div className={styles.fetchStatus}>
                {props.productsFetchStatus ? (
                    <div className={styles.fetchStatusBox}>
                        <h4 className={fonts.subTitleFont}>Products</h4>
                        <img src="/icons/check.svg" />
                    </div>
                ) : (
                    <div className={styles.fetchStatusBox}>
                        <h4 className={fonts.subTitleFont}>Products</h4>
                        <img src="/icons/cancel.svg" />
                    </div>
                )}
                {props.cartsFetchStatus ? (
                    <div className={styles.fetchStatusBox}>
                        <h4 className={fonts.subTitleFont}>Carts</h4>
                        <img src="/icons/check.svg" />
                    </div>
                ) : (
                    <div className={styles.fetchStatusBox}>
                        <h4 className={fonts.subTitleFont}>Carts</h4>
                        <img src="/icons/cancel.svg" />
                    </div>
                )}
                {props.usersFetchStatus ? (
                    <div className={styles.fetchStatusBox}>
                        <h4 className={fonts.subTitleFont}>Users</h4>
                        <img src="/icons/check.svg" />
                    </div>
                ) : (
                    <div className={styles.fetchStatusBox}>
                        <h4 className={fonts.subTitleFont}>Users</h4>
                        <img src="/icons/cancel.svg" />
                    </div>
                )}
            </div>
            <article>
                <h1 className={fonts.titleFont}>¡Welcome USER to the Control Panel!</h1>
                <section id="whatisthis">
                    <h2 className={fonts.subTitleFont}>What is this?</h2>
                    <p className={fonts.textFont}>To the left of this section, you will see some options to manage products and analytics.</p>
                </section>
                <section id="statics">
                    <h2 className={fonts.subTitleFont}>Analytics?</h2>
                    <p className={fonts.textFont}>Yes! We provide some metrics about the products and various options for visualization.</p>
                </section>
                <section id="updates">
                    <h2 className={fonts.subTitleFont}>Updates?</h2>
                    <p className={fonts.textFont}><a className={fonts.linkFont} href="https://github.com/SrZafkiell" target="_blank">SrZafkiell</a> will offer updates for this project until he considers it finished.</p>
                    <p className={fonts.textFont}>The implemented updates and upcoming ones can be found in this: <a className={fonts.linkFont} href="https://trello.com/es" target="_blank">Updates list</a></p>
                </section>
                <section>
                    <h2 className={fonts.subTitleFont}>Marks above?</h2>
                    <p className={fonts.textFont}>The marks above represent the status of the fetch, if an error occurs, you will see an "X" in the one with the error.</p>
                </section>
                {/* <section>
                    <h2 className={fonts.subTitleFont}></h2>
                    <p className={fonts.textFont}></p>
                </section> */}
            </article>
        </div>
    )
};

export default DefaultContent;