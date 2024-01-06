"use client"
import React, { useEffect } from 'react'
import { useStoreUser } from '@/store/user';
import { getUser } from '@/server/user';

export default  function ReadUser() {
    const userData = useStoreUser((state:any) => state.userData)
    const setUserData = useStoreUser((state:any) => state.setUserData)

    console.log(userData)

    async function getUserData(){
        try {
         const result =  await getUser()
         setUserData(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserData()
      }, []);

    return null
  }
