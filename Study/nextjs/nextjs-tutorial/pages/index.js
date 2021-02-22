import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const API_URL="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const [list, setList] = useState([]);

  function getData(){
    axios.get(API_URL)
    .then((res) =>{
      console.log(res.data);
      setList(res.data);
    })
  }

  useEffect(()=>{
      getData();
    },[]);

  return (
    <div>
      <Head>
        <title>Park</title>
      </Head>
      <ItemList list={list}></ItemList>
    </div>
  )
}
