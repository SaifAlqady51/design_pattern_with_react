import { PersonType } from '../../types/Person.type'


const SmallPersonList = ({person}:{person:PersonType}) => {
    const {name,age} = person
    return (
        <p>Name: {name}, Age: {age} years</p>
    )
}

export default SmallPersonList