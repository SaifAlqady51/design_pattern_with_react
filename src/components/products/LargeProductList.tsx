import { ProductType } from '../../types/Product.type'


const LargeProductList = ({product}:{product:ProductType}) => {
    const {name,price,descrption,rating} = product
    return (
        <>
            <h3>Name: {name}</h3>
            <p>Price:{price} $</p>
            <p>Description: {descrption}</p>
            <h3>Rating: {rating} </h3>

        </>
    )
}

export default LargeProductList