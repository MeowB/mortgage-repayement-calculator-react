import { useState } from 'react';
import './App.css';
import Result from './components/Result';

function App() {
	const [amount, setAmount] = useState(0)
	const [term, setTerm] = useState(0)
	const [rate, setRate] = useState(0)
	const [type, setType] = useState('')

	function handleSubmit() {
		handleRadioChange()
	}

	function handleAmountChange() {
		const value = document.getElementById('mortgage-amount').value
		setAmount(value)
	}

	function handleTermChange() {
		const value = document.getElementById('mortgage-term').value
		setTerm(value)
	}

	function handleInterestChange() {
		const value = document.getElementById('interest-rate').value
		setRate(value)
	}

	function handleRadioChange() {
		const value = document.querySelector('input[name=mortgage-type]:checked').value
		setType(value)
	}


  return (
    <>
		<div className="main-content">
			<h1>Mortgage Calculator</h1>
			<a href="#">Clear All</a>
			<div className="form">
				<form action="#">
					<div className="mortgage-amount">
						<label htmlFor="mortgage-amount">Mortgage Amount</label>
						<input type="number" name="mortgage-amount" id="mortgage-amount" onChange={handleAmountChange} />
					</div>
		
					<div className="mortgage-term">
						<label htmlFor="mortgage-term">Mortgage Term</label>
						<input type="number" name="mortgage-term" id="mortgage-term" onChange={handleTermChange} />
						<p>years</p>
					</div>	
					
					<label htmlFor="interest-rate">Interest Rate</label>
					<input type="number" name="interest-rate" id="interest-rate" onChange={handleInterestChange} />

					

					<div className="radio">
						<h2>Mortgage Type</h2>
						<div>
							<label for="html">Repayement</label><br></br>
							<input type="radio" id="repayement" name="mortgage-type" value="repayement" />
						</div>
						<div>
							<label for="html">Interest Only</label><br></br>
							<input type="radio" id="interest" name="mortgage-type" value="interest-only" />
						</div>
					</div>

					<input type="button" onClick={handleSubmit} />
				</form>
			</div>
			<Result amount={amount} term={term} rate={rate} type={type}/>
		</div>
    </>
  )
}

export default App
