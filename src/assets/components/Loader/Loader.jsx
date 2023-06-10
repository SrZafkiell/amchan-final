import { MagnifyingGlass } from 'react-loader-spinner';
import styles from './Loader.module.css';
import fonts from '/src/assets/fonts/GlobalFonts.module.css'

export const Loader = () => {
    return (
        <div className={styles.loaderBox}>
            <h2 className={fonts.subTitleFont}>Fetching Data</h2>
            <MagnifyingGlass
                visible={true}
                height="150"
                width="150"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#3366CC'
            />
        </div>
    )
};