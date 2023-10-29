// import { useEffect, useState } from 'react'
// import axios from 'axios'
import React,{ Suspense } from 'react'
import { fetchData } from './fetchData'
import './App.css'

const apiData = fetchData("http://localhost:4091/users")

function App() {

  const data = apiData.read();

  return (
    <div>
      <h1>Render-as-you-Fetch</h1>
      <Suspense fallback = {<div>Loading ...</div>}> 
      <ul className='card'>
        {data?.map((item) => (
          <li key={item.id}>Nombre: <span className='colorName'>{item.name} </span>  Email:  <span className='colorEmail'>{item.email} </span> </li>
          
        ))}
      </ul>
      </Suspense>
    </div>
  )
}

export default App
