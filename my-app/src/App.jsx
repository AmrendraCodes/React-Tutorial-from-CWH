import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let name = " Amrendra Kumar"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <img src="" alt="" srcset="" />
    <div className="container">
      <h1>hello {name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste animi error tempore deserunt quis tempora, deleniti reprehenderit quidem, beatae molestiae ea! Provident excepturi, cupiditate autem cumque unde voluptates perspiciatis quos, ducimus totam odio labore.</p>
    </div>
    </>
  )
}

export default App
