import React,{useState} from 'react'
import NqmuseState from './components/NqmuseState'
import NqmUseEffect from './components/NqmUseEffect'
import NqmUseContext from './components/NqmUseContext'
import './App.css'

export default function App() {
  return (
    <div className='container boder mt-3'>

      <h1 className='text-center'>Nguyễn Quang Mạnh - hook</h1>

      <NqmuseState/>
      <hr/>
      <NqmUseEffect/>
      <hr/>
      <NqmUseContext/>
    </div>
  )
}
