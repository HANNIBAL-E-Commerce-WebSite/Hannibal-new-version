"use client"

import { createContext, useContext, useState } from "react";

const UserContext =createContext<any>(undefined)

export function UserWrapper({children}: {
    children: React.ReactNode
  }){
    const [userc,setUser]=useState<User|{}>({})

    return (
        <UserContext.Provider value={{
            userc,
            setUser
        }
        }>
            {children}
        </UserContext.Provider>
    )
  }

export function useUserContext(){
    return useContext(UserContext)
}  