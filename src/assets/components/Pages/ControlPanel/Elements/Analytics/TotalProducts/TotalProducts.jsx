import styles from './TotalProducts.module.css'
import fonts from '/src/assets/fonts/GlobalFonts.module.css'
import controlPanelStyle from '/src/assets/components/Pages/ControlPanel/ControlPanel.module.css';

function TotalProducts(props){
    return (
        <div className={controlPanelStyle.controlPanelContent}>
            <div className={controlPanelStyle.controlPanelContentTitle}>
                <h1 className={fonts.titleFont}>TOTAL PRODUCTS</h1>
                <h2 className={fonts.titleFont}>{Object.keys(props.allProductsObject).length}</h2>
                <p className={fonts.textFont}>Products got detected</p>
            </div>
            <div className={controlPanelStyle.controlPanelContentCharts}>
                <div className={controlPanelStyle.chart}>
                    {/* Add chart component */}
                </div>
            </div>
        </div>
    )
};

export default TotalProducts;