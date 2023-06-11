import React from "react";
import fonts from '/src/assets/fonts/GlobalFonts.module.css'
import styles from './DefaultContent.module.css'

function DefaultContent() {

    return (
        <div className={styles.defaultContentBox}>
            <article>
                <h1 className={fonts.titleFont}>¡Welcome USER to the Control Panel!</h1>
                <section id="whatisthis">
                    <h2 className={fonts.subTitleFont}>What is this?</h2>
                    <p className={fonts.textFont}>To the left of this section, you will see some options to manage products and analitics.</p>
                </section>
                <section id="statics">
                    <h2 className={fonts.subTitleFont}>Analitics?</h2>
                    <p className={fonts.textFont}>Yes! We provide some metrics about the products and various options of visualizing.</p>
                </section>
                <section id="updates">
                    <h2 className={fonts.subTitleFont}>Updates?</h2>
                    <p className={fonts.textFont}><a className={fonts.linkFont} href="https://github.com/SrZafkiell" target="_blank">SrZafkiell</a> will be offering updates for this project till he considers it is finished.</p>
                    <p className={fonts.textFont}>The implemented updates and upcoming ones can be found in this: <a className={fonts.linkFont} href="https://trello.com/es" target="_blank">Updates list</a></p> 
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