import { PersonType } from "../types/Person.type"
import { ProductType } from "../types/Product.type"



type RegularListProps = {
    items: PersonType[] | ProductType[],
    resourseName:string,
    itemComponent: any
}

const RegularList = ({items,resourseName,itemComponent:ItemComponent}: RegularListProps) => {

    return (
        <>
            {items.map((item,i) => (
                <ItemComponent key={i} {...{ [resourseName]: item }} />
            ))}
        </>
    )

}

export default RegularList