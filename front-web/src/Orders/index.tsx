import './styles.css';
import StepsHeader from './StepsHeader'
import ProductList from './ProductList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductList products={products}/>
        </div>
    )
}


export default Orders;