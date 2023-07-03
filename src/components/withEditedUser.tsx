import {useEffect, useState} from "react";
import axios from "axios";
import {PersonType} from "../types/Person.type";

axios.defaults.baseURL = 'http://localhost:8000'

type withEditedUserProps  = {
    person: PersonType | null,
    onChangeUser:any,
    onSaveUser:any,
    onResetUser:any
}

export const withEditedUser = (Component:({person,onChangeUser,onSaveUser,onResetUser}:withEditedUserProps) => JSX.Element,userId:string) => {
    return ((props:any) => {
        const [originalUser,setOriginalUser] = useState<PersonType | null>(null)
        const [user,setUser] = useState<PersonType | null >(null);
        
        useEffect(() => {
            (async () => {
                const res = await axios.get(`/user/${userId}`)
                setOriginalUser(res.data);
                setUser(res.data);
            })();
        },[])
        
        const onChangeUser = (changes:any) => {
            setUser({...user,...changes})
        }
        
        const onSaveUser = async() => {
            const config = {
                method : "post",
                url : `/user/${userId}`,
                headers : {
                    "Content-Type":"application/json",  
                },
                data : JSON.stringify(user)
            }

            const response = await axios(config)
            setUser(response.data)
            setOriginalUser(response.data)
        }
        
        const onResetUser = () => {
            setUser(originalUser)
        }
        
        
        return <Component 
            {...props}
            person={user}
            onChangeUser={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}
        />
    })
}