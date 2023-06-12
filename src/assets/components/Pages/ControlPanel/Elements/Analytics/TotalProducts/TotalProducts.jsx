import styles from './TotalProducts.module.css'
import fonts from '/src/assets/fonts/GlobalFonts.module.css'
import controlPanelStyle from '/src/assets/components/Pages/ControlPanel/ControlPanel.module.css';

function TotalProducts(props){
    return (
        <div className={controlPanelStyle.controlPanelContent}>
            <h1 className={fonts.titleFont}>Total products: {Object.keys(props.allProductsObject).length}</h1>
        </div>
    )
};

export default TotalProducts;