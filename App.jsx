import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [value,setvalue]=useState(0);
  return (
    <article>
    <header> COUNTER APP</header>
    <section>
      <h1>{value}</h1>
      <div className='buttons'>
      <button className='btn1' onClick={()=> setvalue(value+1)} >+</button>
      <button className='btn2' onClick={()=>setvalue(value-1)} disabled={value==0}>-</button>

      </div>
      <footer>@copy All Rights reserved by ranupandit</footer>
    </section>

      
    </article>
  )
}

export default App
