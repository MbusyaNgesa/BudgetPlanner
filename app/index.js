import { Button, StyleSheet, Text, View,  } from "react-native";
import React, { useEffect } from "react";
import {Link, useRouter} from 'expo-router'
import services from './../utils/services'

export default function Home() {
 
const router=useRouter();
  useEffect(()=>{
    checkUserAuth();
  }, [])
  
  /*
  Used to check if user is already authenticated or not
  */
  const checkUserAuth=async()=>{
    const result=await services.getData('login');
    if(result!=='true')
    {
      router.replace('/login')
    }
  }
  

}


