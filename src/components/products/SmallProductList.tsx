import { ProductType } from '../../types/Product.type'
 

const SmallProductList = ({product}:{product:ProductType}) => {
    const {name,price} = product
    return (
        <p>Name: {name}, Price: {price} $</p>
    )
}

export default SmallProductList