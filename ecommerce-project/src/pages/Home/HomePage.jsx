import './Homepage.css'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';



export function Homepage({ cart ,loadCart}) {

    const [products, setProducts] = useState([]);



    useEffect( () => {
        async function getHomeData() {
            const response = await axios.get('http://localhost:3000/api/products');
            setProducts(response.data)
        }

   getHomeData();

    }, []);



    return (
        <>
            <title>Ecommerce Project</title>


            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}