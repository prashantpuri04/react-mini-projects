import ProductCard from "./ProductCard";
import gp from '../../Assets/Mock-data/Mock-product-data';

// parent component
const productsData = gp;

const Products = () =>{
    console.log(productsData);
    return (
        <div>
            {productsData.map(function(item) {

            return  <ProductCard title={item.title} price= {item.price}/>
            })}
            
            
        </div>
    )
}

export default Products;