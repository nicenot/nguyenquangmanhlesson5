import React, { useContext, useState } from 'react'
import { ThemeContext } from './NqmUseContext'


export default function NqmUsecontext2() {
   const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
        <h2> NqmUsecontext2</h2>
        <p>
            <b>2210900039</b>
            <b>Nguyễn Quang Mạnh</b>
            <i>k22cntt1</i>
        </p>
    </div>
  )
}
