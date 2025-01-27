import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'
import { Link } from 'react-router-dom'



export const Home = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <h1 className="text-3xl font-bold">
                Hello world!
            </h1>
            <div className="flex flex-col space-y-2">
                <Link to='/'>Home</Link>
                <Link to='list'>List</Link>
                <Link to='detail'>Detail</Link>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
