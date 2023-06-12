import BarsChart from './Charts/BarsChart';
import fonts from '/src/assets/fonts/GlobalFonts.module.css';
import controlPanelStyle from '/src/assets/components/Pages/ControlPanel/ControlPanel.module.css';

function MostSelled(props) {

    const getProductTitle = (productId) => {
        const productArray = Object.values(props.allProductsObject);
        const product = productArray.find((item) => item.id.toString() === productId.toString());
        return product ? product.title : 'Name not found';
    };

    const checkForMostSelled = (cartsList) => {
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
    };

    return (
        <div className={controlPanelStyle.controlPanelContent}>
            <h1 className={fonts.titleFont}>MOST SOLD PRODUCT:</h1>
            <h2 className={fonts.titleFont}>
                {checkForMostSelled(props.allCartsObject)}
            </h2>
            <BarsChart carts={props.allCartsObject} products={props.allProductsObject} />
        </div>
    );
}

export default MostSelled;
