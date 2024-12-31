import { useEffect, useState } from "react"


const List = ({cnt}) => {
    const [item,setItem]=useState([]);
    useEffect(()=>{
        setItem(cnt(5))
        console.log("Updating list...")
    },[cnt])
  return (
    <>
    <ul>
        {item.map((data,i)=>{
            return(<li key={i}>{data}</li>)
        })}
    </ul>
    </>
  )
}

export default List