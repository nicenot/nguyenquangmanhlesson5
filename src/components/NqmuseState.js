import React, { useState } from 'react'

export default function NqmuseState() {
      // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
    //mảng
    const [list,setlist]=useState([1.5 ]);
    //hàm sử lý xự kiện thêm ngẫu nhiên
    const nqmHandleList=()=>{
        //sinh ngẫu nhiên một giá trị số
        let num = parseInt(Math.random()*100)
        //cập nhật tại state list
        setlist([
            ...list,
            num
        ])
        //cách khác
        //let lst = list.push(num);
       // setlist(lst)
    }
  return (
    <div>
 <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3>list: {list.toString()}</h3>
      <button oneClick={nqmHandleList}>thêm ngẫu nhiên</button>
    </div>
  )
}
