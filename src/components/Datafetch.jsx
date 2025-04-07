import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Datafetch = () => {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[buttonid,setButtonId]=useState(1)
    function clickHandler(){
        setButtonId(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[buttonid])
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <button onClick={clickHandler}>Get Data</button>
        {post.body}
    </div>
  )
}

export default Datafetch