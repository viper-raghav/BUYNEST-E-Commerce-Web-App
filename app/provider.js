"use client"

import React, { useEffect } from 'react';
import Header from './components/Header';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';

function Provider({ children }) {

  const {user} = useUser();

  useEffect(()=>{
    user&&CheckIsNewUser()
  },[user])

  const CheckIsNewUser=async()=>{
    const result=await axios.post('/api/user', {
      user:user
    })

    console.log(result.data)
  }

  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
}

export default Provider;
