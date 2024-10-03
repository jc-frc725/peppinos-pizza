import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'
import './scss/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="site-header-container">
        <Header />
        <Nav />
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>It's Pizza Time</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          pizza is {count === 69 ? "haha funni number" : count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test PIZZA
        </p>
      </div>
      <div>Featured</div>
      <div>Make-a da pizza</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
