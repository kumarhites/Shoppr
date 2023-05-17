import React from 'react'
import {useState, useEffect} from "react"

function Landing() {

    const [data, setData] = useState()
    const getData = async() => {
        try {
            const res = await fetch("/api/products")
            if(res.status === 200){
                const resData = await res.json()
                setData(resData)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(data)
  return (
    <>
        {data?.products?.map((product) => (
            <p>{product.id}. {product.author}</p>
        ))}
    </>
  )
}

export default Landing