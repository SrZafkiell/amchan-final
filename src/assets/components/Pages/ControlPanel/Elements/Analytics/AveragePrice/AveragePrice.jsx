import fonts from '/src/assets/fonts/GlobalFonts.module.css'
import controlPanelStyle from '/src/assets/components/Pages/ControlPanel/ControlPanel.module.css';

function AveragePrice(props) {

    const findAveragePrice = (productsList) => {
        let productValuesSum = 0;
        productsList.forEach((product) => {
            productValuesSum += product.price;
        })
        return "$"+ (productValuesSum/productsList.length).toFixed(2);
    };

    return (
        <div className={controlPanelStyle.controlPanelContent}>
            <div className={controlPanelStyle.controlPanelContentTitle}>
                <h1 className={fonts.titleFont}>AVERAGE PRICE</h1>
                <h2 className={fonts.titleFont}>{findAveragePrice(props.allProductsObject)}</h2>
                <p className={fonts.textFont}>Between all the products available "{props.allProductsObject.length}"</p>
            </div>
            <div className={controlPanelStyle.controlPanelContentCharts}>
                <div className={controlPanelStyle.chart}>
                    {/* Add chart component */}
                </div>
            </div>
        </div>
    )
};

export default AveragePrice;