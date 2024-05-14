import React, { useEffect, useState } from 'react'

export default function NqmUseEffect() {
    const [count, setCount] = useState(0);
    const NqmHandleClick =()=>{
        setCount(prev => prev +1);
    }
    useEffect(()=>{
        document.title = `Nguyễn Quang Mạnh: You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    useEffect(()=>{
        console.log("chạy lần đầu tiên - một lần");
    },[])
    //[desp]
    useEffect(()=>{
        console.log(`useEffect count Click: `,count)
    },[count])
  return (
    <div>
        <h2> demo - useeffect: You clicked{count} times</h2>
        <button onClick={NqmHandleClick}>
        Click me
        </button>
    </div>
  )
}
