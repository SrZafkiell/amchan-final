import styles from './ImportantInfoSection.module.css'
import fonts from '/src/fonts/GlobalFonts.module.css'

function ImportantInfoSection({ mainTitle, subTitle, content }){
    return (
        <>
            <div className={styles.importantInfoSection}>
                <div className={styles.importantInfoContent}>
                <h1 className={fonts.titleFont}>{mainTitle}</h1>
                <div className={styles.importantInfoContent}>
                    <h2 className={fonts.subTitleFont}>{subTitle}</h2>
                    <a className={fonts.textFont}>{content}</a>
                </div>
                </div>
            </div>
        </>
    )
};

export default ImportantInfoSection;