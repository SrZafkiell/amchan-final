import styles from './NormalInfoSection.module.css'
import fonts from '/src/fonts/GlobalFonts.module.css'

function NormalInfoSection({ mainTitle, subTitle, content }) {
    return (
        <>
            <div className={styles.normalInfoSection}>
                <div className={styles.normalInfoContent}>
                    <h1 className={fonts.titleFont}>{mainTitle}</h1>
                    <div className={styles.normalInfoContent}>
                        <h2 className={fonts.subTitleFont}>{subTitle}</h2>
                        <a className={fonts.textFont}>{content}</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NormalInfoSection;