import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div className="main-content">
			<h1>Mortgage Calculator</h1>
			<a href="#">Clear All</a>
			<Form />
		</div>
		<div className="result">

		</div>
    </>
  )
}

export default App
