import styles from './TotalProducts.module.css'
import fonts from '/src/assets/fonts/GlobalFonts.module.css'

function TotalProducts(props){
    return (
        <>
            <h1 className={fonts.titleFont}>Total products: {Object.keys(props.allProductsObject).length}</h1>
        </>
    )
};

export default TotalProducts;