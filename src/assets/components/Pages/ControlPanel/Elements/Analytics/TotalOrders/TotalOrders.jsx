import styles from './TotalOrders.module.css'
import fonts from '/src/assets/fonts/GlobalFonts.module.css'

function TotalOrders(props){
    return (
        <>
            <h1 className={fonts.titleFont}>Total orders: {Object.keys(props.allCartsObject).length}</h1>
        </>
    )
};

export default TotalOrders;