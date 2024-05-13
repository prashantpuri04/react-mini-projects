import "./product.scss";
//child component

const ProductCard = (props) =>{
    console.log(props);
    // destructuring from props
    const {title, price } = props
    return (
         <div className="product-card">
             Hello from Product Card fetching data from mock data {title} {price}
         </div>
    )
}

export default ProductCard;