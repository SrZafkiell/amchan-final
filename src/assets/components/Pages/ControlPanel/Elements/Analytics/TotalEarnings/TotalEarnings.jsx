import styles from './TotalEarnings.module.css'
import fonts from '/src/assets/fonts/GlobalFonts.module.css'
import controlPanelStyle from '/src/assets/components/Pages/ControlPanel/ControlPanel.module.css';

function TotalEarnings(props) {

    const getProductPrice = (productId) => {
        const productArray = Object.values(props.allProductsObject);
        const product = productArray.find((item) => item.id.toString() === productId.toString());
        return product ? product.price : 0;
    }

    const calcTotalEarnings = (cartsList) => {
        let totalEarnings = 0;
        cartsList.forEach((cart) => {
            cart.products.forEach((product) => {
                totalEarnings += (getProductPrice(product.productId) * product.quantity);
            })
        })
        return "$"+totalEarnings.toFixed(2);
    };

    return (
        <div className={controlPanelStyle.controlPanelContent}>
            <div className={controlPanelStyle.controlPanelContentTitle}>
                <h1 className={fonts.titleFont}>TOTAL EARNINGS</h1>
                <h2 className={fonts.titleFont}>{calcTotalEarnings(props.allCartsObject)}</h2>
                <p className={fonts.textFont}>From all the analyzed carts</p>
            </div>
            <div className={controlPanelStyle.controlPanelContentCharts}>
                <div className={controlPanelStyle.chart}>
                    {/* Add chart component */}
                </div>
            </div>
        </div>
    )
};

export default TotalEarnings;