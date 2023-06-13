import Highcharts from "highcharts";
import React, { useEffect, useRef } from "react";


const BarsChart = ({ carts, products }) => {

    const getProductTitle = (productId) => {
        const productArray = Object.values(products);
        const product = productArray.find((item) => item.id.toString() === productId.toString());
        return product ? product.title : 'Name not found';
    };

    const chartRef = useRef(null);

    useEffect(() => {
        const productQuantities = {};
        carts.forEach((cart) => {
            cart.products.forEach((product) => {
                const { productId, quantity } = product;
                if (productQuantities[productId]) {
                    productQuantities[productId] += quantity;
                } else {
                    productQuantities[productId] = quantity;
                }
            });
        });

        const sortedProducts = Object.entries(productQuantities).sort(
            (a, b) => b[1] - a[1]
        );

        const chartData = sortedProducts.map(([productId, quantity]) => ({
            name: getProductTitle(productId),
            y: quantity,
        }));

        Highcharts.chart(chartRef.current, {
            chart: {
                type: "column",
            },
            title: {
                text: "Product Sales",
            },
            xAxis: {
                type: "category",
                title: {
                    text: "Products",
                },
            },
            yAxis: {
                title: {
                    text: "Quantity",
                },
            },
            series: [
                {
                    name: "Quantity",
                    data: chartData,
                },
            ],
        });
    }, [carts]);

    return <div ref={chartRef}></div>;
};

export default BarsChart;