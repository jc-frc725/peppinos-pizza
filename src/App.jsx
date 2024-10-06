import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Nav from './components/Nav'
import Featured from './components/Featured'
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
      <div className="main-container">
        <h1>It's Pizza Time</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            pizza is {count === 69 ? "haha funni number" : count}
          </button>
          <p>
            Deals go here
          </p>
        </div>
        <Featured />
        <div>Make-a da pizza</div>
        <Footer />
      </div>
    </>
  )
}

export default App
