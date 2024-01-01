"use client"

import { createContext, useContext, useState } from "react";

const UserContext =createContext<any>(undefined)

export function UserWrapper({children}: {
    children: React.ReactNode
  }){
    const [user,setUser]=useState<User|{}>({})

    return (
        <UserContext.Provider value={{
            user,
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