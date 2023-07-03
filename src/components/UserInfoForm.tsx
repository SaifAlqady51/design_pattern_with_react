import { withEditedUser } from "./withEditedUser";
import {PersonType} from "../types/Person.type";


type withEditedUserProps  = {
    person: PersonType,
    onChangeUser:any,
    onSaveUser:any,
    onResetUser:any
}


export const UserInfoForm = withEditedUser(({person,onChangeUser,onSaveUser,onResetUser}) => {
    const {name,age,hairColor} = person || {}
    console.log('person name is '+ person?.name)
    return person ?(
        <>
            <label>
                  Name:
                <input type="text" value={name} onChange={ e => onChangeUser({name:e.target.value})} />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={ e => onChangeUser({age:Number(e.target.value)})} />
            </label>
            <label>
                Hair color:
                <input type="text" value={hairColor} onChange={ e => onChangeUser({hairColor:e.target.value})} />
            </label>
            <button onClick={onResetUser}>Reset user</button>
            <button onClick={onSaveUser}>Save change</button>
        </>
    ): <p>Loading....</p>
},'3')