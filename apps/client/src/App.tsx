import { useEffect, useState } from 'react';
import './App.css'

function App() {
  
  const [message, setMessage] = useState('No hay mensaje');

  useEffect(()=>{
    if(message !== 'No hay mensaje'){
      setTimeout(()=>{
        setMessage('No hay mensaje')
      },4000)
    }
  },[message])

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
      <span>{ message }</span>
      <button onClick={() => {
        fetch('/api')
          .then(res => res.text())
        .then(data => setMessage(data))
      }}>
        Click me
      </button>
      
    </div>
  )

}

export default App
