import BarsChart from './Charts/BarsChart';
import fonts from '/src/assets/fonts/GlobalFonts.module.css';
import controlPanelStyle from '/src/assets/components/Pages/ControlPanel/ControlPanel.module.css';
import styles from './MostSold.module.css'
import PieChart from './Charts/PieChart';

function MostSold(props) {

    const getProductTitle = (productId) => {
        const productArray = Object.values(props.allProductsObject);
        const product = productArray.find((item) => item.id.toString() === productId.toString());
        return product ? product.title : 'Name not found';
    };

    const checkForMostSold = (cartsList) => {
        if (cartsList.length) {
            const productQuantities = {};
            cartsList.forEach((cart) => {
                cart.products.forEach((product) => {
                    const { productId, quantity } = product;
                    if (productQuantities[productId]) {
                        productQuantities[productId] += quantity;
                    } else {
                        productQuantities[productId] = quantity;
                    }
                });
            });
            const maxValueId = Object.keys(productQuantities).reduce((a, b) => productQuantities[a] > productQuantities[b] ? a : b);
            const productTitle = getProductTitle(maxValueId);

            return productTitle;
        }
    };

    return (
        <div className={controlPanelStyle.controlPanelContent}>
            <div className={controlPanelStyle.controlPanelContentTitle}>
                <h1 className={fonts.titleFont}>MOST SOLD PRODUCT</h1>
                {((props.allCartsObject).length && (props.allProductsObject).length) ? (
                    <>
                        <h2 className={fonts.titleFont}>{checkForMostSold(props.allCartsObject)}</h2>
                        <p className={fonts.textFont}>Got detected as the most sold product</p>
                    </>

                ) :
                    <>
                        <h2 className={fonts.titleFont}>None</h2>
                        <p className={fonts.textFont}>No products were found</p>
                    </>
                }
            </div>
            <div className={controlPanelStyle.controlPanelContentCharts}>
                {((props.allCartsObject).length && (props.allProductsObject).length) ? (
                    <div className={controlPanelStyle.chart}>
                        <div className={controlPanelStyle.mainChart}>
                            <BarsChart carts={props.allCartsObject} products={props.allProductsObject} />
                        </div>
                        <div className={controlPanelStyle.mobileChart}>
                            <PieChart carts={props.allCartsObject} products={props.allProductsObject} />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default MostSold;
