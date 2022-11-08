import { useEffect, useState } from "react";
import React from 'react'

export default function GetData() {
    const [userData, setUserData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)
    let userId = 12


    useEffect(() => {
        async function fetchData() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:3000/user/${userId}`)
                const { userData } = await response.json()
                setUserData(userData)    
            }
            catch(err) {
                console.log(err)
                setError(true)
            }
            finally {
                setDataLoading(false)
            }
        }
        fetchData()
    }, [userId])

    return (
        <>
            {console.log(userData)} 
        </>
  )
}

    