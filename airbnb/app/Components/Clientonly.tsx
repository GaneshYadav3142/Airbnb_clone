'use client'

import React, { useEffect, useState } from "react"
interface ClientOnlyProps{
    children:React.ReactNode
}

export const Clientonly:React.FC<ClientOnlyProps>= ({children}) => {
    const [hasMounted,setHasMounted]=useState(false)

    useEffect(()=>{
        setHasMounted(true)  //when mounted setting hasMounted to true
    },[])

    if(!hasMounted) return null

  return (
    <>
      {children}
    </>
  )
}
