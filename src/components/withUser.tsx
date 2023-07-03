import axios from 'axios'
import {useState,useEffect} from 'react'
import { PersonType } from '../types/Person.type'
import React from 'react';


axios.defaults.baseURL = 'http://localhost:8000'

export const withUser = (Component:({person}:{person:PersonType}) => JSX.Element,userId:string) => {
    return((props:any) => {
        const [user,setUser] = useState<PersonType | null>(null)

        useEffect(() => {
            (async () => {
                const res = await axios.get(`/user/${userId}`)
                setUser(res.data)

            })();
        },[])

        return <Component {...props} person={user}/>

    })

}